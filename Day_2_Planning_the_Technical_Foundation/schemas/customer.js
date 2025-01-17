export default {
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'Customer ID',
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
        name: 'orders',
        title: 'Orders',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'order' }]
          }
        ]
      }
    ]
  };
  