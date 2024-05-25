const { models } = require('../libs/sequelize');

class OrderService {

    constructor() {
    }

    async create(listOrder, res){
        const listFruits = await models.Fruit.findAll();
        let totalValue = 0;
        let totalOrderFruits = 0;
        let sizeListOrder = listOrder.length;

        listOrder.forEach(order => {
            let countInt = 0;
            let fruitOrder = order.type;
            let quantityOrder = order.quantity
            listFruits.forEach(fruit => 
                {
                let fruitItem = fruit.type;
                let quantityFruit = fruit.quantity;
                let priceFruit = fruit.price;
                let semiTotal = 0;

                if (fruitOrder === fruitItem)
                {
                    countInt++;
                }

                if (fruitOrder === fruitItem && quantityOrder <= quantityFruit)
                    {
                        totalOrderFruits = quantityOrder + totalOrderFruits;
                        if (quantityOrder >= 10)
                        {
                            let percentage = 10 * 0.05;
                            semiTotal = (priceFruit*10) - priceFruit * percentage;
                        }
                        else
                        {
                            semiTotal = priceFruit * quantityOrder;
                        }

                        totalValue = semiTotal + totalValue;

                    }
                    else if (fruitOrder === fruitItem && quantityOrder > quantityFruit)
                    {
                        res.status(400).send(`Your quantity: ${quantityOrder} request fruit is exceed the 
                        quantity we have: ${quantityFruit} :( !!`);
                    }
                });
            if (countInt == 0)
            {
                res.status(400).send(`We don't have: '${fruitOrder}'`); 
            }
        });

        if (sizeListOrder >= 5)
            {
                totalValue = totalValue - (totalValue * 0.1);
            }

        const string = listOrder.map(order => `{${order.type}, ${order.quantity}}`).join(', ');
        console.log(`{${string}}`);

        const finalOrder = await models.Order.create({
            fruit_list: string,
            total_value: totalValue
        });

        return res.status(200).send(finalOrder);
    }

}


module.exports = OrderService;