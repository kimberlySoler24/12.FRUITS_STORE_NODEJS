
const { models } = require('../libs/sequelize');

class FruitService {

    constructor() {
    }

    async create(data){
        const res = await models.Fruit.create(data);
        return res;
    }


    async find(){
        const res = await models.Fruit.findAll();
        return res;
    }

    async findById(id){
        const res = await models.Fruit.findByPk(id);
        return res;
    }

    async update(id, data) {
        try {
            const instance = await this.findOne(id);
            const updatedInstance = await instance.update(data);
            return { success: true, data: updatedInstance };
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(id){
        const model = await models.Fruit.findByPk(id); 
        await model.destroy();
        return {deleted : true}
    }

}


module.exports = FruitService;