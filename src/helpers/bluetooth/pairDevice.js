// 蓝牙手环设备配对
const pairDevice = async (
    prefix,
    onNotificationCallback,
    onDisconnectCallback
) => {
    return await navigator.bluetooth
        .requestDevice({
            filters: [{ namePrefix: prefix }],
            optionalServices: ["0000ffe0-0000-1000-8000-00805f9b34fb"],
        })
        .then(async (dev) => {
            const server = await dev.gatt.connect();
            const service = await server.getPrimaryService(
                "0000ffe0-0000-1000-8000-00805f9b34fb"
            );
            const characteristic = await service.getCharacteristic(
                "0000ffe1-0000-1000-8000-00805f9b34fb"
            );

            dev.addEventListener(
                "gattserverdisconnected",
                onDisconnectCallback
            );
            characteristic.startNotifications().then((_) => {
                characteristic.addEventListener(
                    "characteristicvaluechanged",
                    onNotificationCallback
                );
            });

            return Object.assign(dev, {
                server: server,
                service: service,
                characteristic: characteristic,
            });
        });
};

export default pairDevice;
