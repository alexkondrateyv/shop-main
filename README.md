# README
 
A small online shop with the ability to sort products, with the ability to add new items.

Requirements:
- sorting by name, by stock count;
- the ability to add a new product;
- the ability to open a product in a separate tab and explore more detailed information;

Technologies:
- React (with hooks);
- Typescript;
- Redux (thunk);
- Axios;
- Formik;
- React Router Dom;
- SCSS;

## Example JSON Response from the Price Ticker service
```json
[
    {
      "id": 3,
      "imageUrl": "https://www.datart.cz/foto/500/4/6/5/product_4465564.jpg",
      "name": "HyperX Pulsefire Haste",
      "count": 8,
      "size": {
        "width": 193,
        "height": 65
      },
      "weight": "200g",
      "comments": [
        {
          "id": 1,
          "productId": 3,
          "description": "the mouse stopped working after 14 days of use, I am now dealing with a complaint",
          "date": "16:00 09.12.2021"
        },
        {
          "id": 2,
          "productId": 3,
          "description": "Satisfaction",
          "date": "14:30 21.08.2022"
        }
      ]
    },
]
```
