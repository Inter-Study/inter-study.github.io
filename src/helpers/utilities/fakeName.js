// 生成随机中文名字
const fakeName = () => {
    const Faker = require("faker-zh-cn");
    return Faker.random.first_name();
};

export default fakeName;
