export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'orderid',
        title: 'Order ID',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'customerid',
        title: 'Customer ID',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'customername',
        title: 'Customer Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'customerLocation',
        title: 'Customer Location',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'productId',
                title: 'Product ID',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'quantity',
                title: 'Quantity',
                type: 'number',
                validation: Rule => Rule.required().min(1)
              },
              {
                name: 'size',
                title: 'Size',
                type: 'string',
                validation: Rule => Rule.required()
              }
            ]
          }
        ]
      },
      {
        name: 'totalAmount',
        title: 'Total Amount',
        type: 'number',
        validation: Rule => Rule.required().min(0)
      },
      {
        name: 'paymentstatus',
        title: 'Payment Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'Pending' },
            { title: 'Completed', value: 'Completed' },
            { title: 'Failed', value: 'Failed' }
          ]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'shippingstatus',
        title: 'Shipping Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'Pending' },
            { title: 'Shipped', value: 'Shipped' },
            { title: 'Delivered', value: 'Delivered' }
          ]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'createAt',
        title: 'Created At',
        type: 'datetime',
        validation: Rule => Rule.required()
      }
    ]
  };
  