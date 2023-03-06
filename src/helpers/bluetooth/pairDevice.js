// 蓝牙手环设备配对
const pairDevice = async (
    filters,
    _service,
    _characteristic,
    onNotificationCallback,
    onDisconnectCallback
) => {
    return await navigator.bluetooth
        .requestDevice({
            filters: filters,
            optionalServices: [_service],
        })
        .then(async (dev) => {
            const server = await dev.gatt.connect();
            const service = await server.getPrimaryService(_service);
            const characteristic = await service.getCharacteristic(
                _characteristic
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
