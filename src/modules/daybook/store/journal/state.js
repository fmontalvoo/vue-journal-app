export default () => ({
    isLoading: false,
    entries: [
        {
            image: null,
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vero exercitationem aperiam, doloremque sit laboriosam eligendi. Nisi sint obcaecati quia inventore asperiores enim, eius magni ipsa quae officia dolorum magnam?',
        },
        {
            image: null,
            id: new Date().getTime() + 100,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nihil deleniti veniam ducimus quasi optio amet in odio? Iure laborum hic minima voluptas cupiditate maiores aliquid. Deleniti, repellendus minus. Eius?',
        },
        {
            image: null,
            id: new Date().getTime() + 200,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem voluptatibus nam fuga quaerat. Eveniet, fuga a, vero blanditiis aliquid, nihil magni itaque dolorem corrupti porro id voluptate accusamus nemo culpa.',
        },
    ],
})