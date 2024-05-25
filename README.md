
# Welcome to my Project Fruits Store on Express Js!

Hi everyone. If you want to create a project is relationed with a Fruit Store, this is a good example for you! .

# About project
This project consist to simulate a software since backend ,when you can to create the fruits that you sell on your store where contain the next characteristics: 

## - Entitie Fruits: 
This entitie contain important information the store needs about the fruits that has on store: 
1. Type of fruit, for example: Apple, Watermelon, Orange...
2. Quantitie, for example: 10 apples, 3 Watermelon, 25 Oranges...
3. Unit Price: $2.500 Colombian pesos the apple...

## - Entitie Orders:
This entitie is very interesting becasuse you can create to order of fruits that some costumer look, this entitie gives the next information: 
1. List of fruits that costumer demand on your store on data type String with JSON format.
2. Total value of fruits demanded by costumer, where have this item the next logic:
2.1. If costumer request more than five fruits, the costumer will have 5% discount on the total value of the purchase. .
2.2. If costumer request more than ten of the same fruits, the costumer will have 10% discount only in this kind of fruit. 
2.3. If costumer order fruit that is not on the store, the service will response "We don't have "name of fruit" :("
2.3. If costumer order quantitie fruit exceeded, the service will response "We don't have this quantitie of "name of fruit" :(" 


# Technologies

To showing this project you need the next technologies and Programming Languages: 
1. Framework [Express Js](https://expressjs.com/) 
![Express js](https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png)
2. Programming Language Javascript ![Javascript](https://media.licdn.com/dms/image/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=rtD52hfy37nFVmc4_MXfnflV6C-ke773W70SYJLoWRc)
3. Database PostgreSQL
![enter image description here](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtXA_nFysoIl0RuOyjzdtftxY4z5e6unoVuzymLr_WA&s)
4. Integrate Environment Development (IDE) [Visual Studio Code](https://code.visualstudio.com/download) 
![visual studio code](https://miro.medium.com/v2/resize:fit:1170/1*BnpPe7u0t-e8hHc-qEmgSQ.png)
5. [Node Js](https://nodejs.org/en/download/prebuilt-installer/current)
![Node Js](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn__7c6f2N6F0I1VEeP4gypPP0ztaxnrzuxP7z2YzMug&s)

## Do you want to clonate this repository?

If you want to clonate this repository, you must follow these steps: 

1. Copying the repository code: 
`https://github.com/kimberlySoler24/11.FRUIT-STORE-ON-.NET.git`
2.  You must be secure you have git installed on you operative system:
![enter image description here](https://vabadus.es/images/cache/imagen_nodo/images/articulos/5c9defbdb55a2145572461.png)
 
3. Opening CMD on your computer:
![enter image description here](https://linube.com/uploads/kb/abrir-consola2.png)
4. Typing on your cmd the next command: 
`git clone https://github.com/kimberlySoler24/11.FRUIT-STORE-ON-.NET.git`


## Do you want to run the project on your computer?

1. Be sure you are installed Node js on your computer
2. Open Visual Studio Code on specific directory
3. type CTRL + J to open Visual's terminal
4. type this command 
`npm init`
5. read the steps to create json file 
6. Install next programs  
`npm install express sequelize pg pg-hstore dotenv swagger-jsdoc swagger-ui-express && npm install --save-dev nodemon
`
7. run project  
`npm run dev`
