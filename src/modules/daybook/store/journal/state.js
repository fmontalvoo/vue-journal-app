export default () => ({
    isLoading: false,
    entries: [
        {
            id: 1,
            image: null,
            date: new Date(2022, 10, 10).toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vero exercitationem aperiam, doloremque sit laboriosam eligendi. Nisi sint obcaecati quia inventore asperiores enim, eius magni ipsa quae officia dolorum magnam?',
        },
        {
            id: 2,
            image: null,
            date: new Date(2022, 10, 30).toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nihil deleniti veniam ducimus quasi optio amet in odio? Iure laborum hic minima voluptas cupiditate maiores aliquid. Deleniti, repellendus minus. Eius?',
        },
        {
            id: 3,
            image: null,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem voluptatibus nam fuga quaerat. Eveniet, fuga a, vero blanditiis aliquid, nihil magni itaque dolorem corrupti porro id voluptate accusamus nemo culpa.',
        },
    ],
})