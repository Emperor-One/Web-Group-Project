# Web-Group-Project

Selected Title: "Simren Liyu Cake"

Group Members
1. Metsakal Zeleke  UGR/1027/13  Section 2
2. Milka Fasika UGR/7126/13 Section 2
3. Nathan Ezra UGR/5222/13 Section 2
4. Tinsae Shemalise UGR/6075/13 Section 2


We have decided to use SQLite database for two reasons:
              1 ) Because it is a self contained database which means that you won't have to host anything when you clone our project. It will work right of the bat.                   2 ) The entities in our projects have strong relationship among themselves thus a relational database managment system is suitable for our scenario.

Our end-points: root url ('localhost:3001')
          */cakes - returns all cakes available in inventory
          */cakes/create - creates(adds) a new cake to the inventory
          */cakes/upload?id = <id> - uploads the image of the specified cake
          */cakes/{id}/update - updates the price or description based on the values found in the request body
          
          */messages - fetches all messages(comments) sent from customers
          */messages/create - helps user leave(send) comments to the owners
          
          */orders - shows all the orders places by customers
          */orders/create - helps customer place orders
          
          */admin/login - this is where the admins sign in

