export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'productid',
        title: 'Product ID',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: Rule => Rule.required().min(0)
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'imageURL',
        title: 'Image URL',
        type: 'url',
        validation: Rule => Rule.required()
      }
    ]
  };
  