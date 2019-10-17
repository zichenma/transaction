import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: 'Trending',
        imgUrl: '//upload-images.jianshu.io/upload_images/8717551-8e32e813e8a68a63.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id: 2,
        title: 'Hand Drawing',
        imgUrl: '//upload-images.jianshu.io/upload_images/13841701-ae169278750c469b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    articleList: [
        {
            id: 1,
            title: 'Fake Word Generator',
            desc: 'It is quite a task thinking up great made-up words that are unique, so I created this word generator to help you come up with the best fake word ideas. They can be great for naming your website, business, product or project. Fake words or pseudowords are words which look like they are real, but actually have no meaning.',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/14386767-150a1ede549eb290.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: 'Fake Word Generator',
            desc: 'It is quite a task thinking up great made-up words that are unique, so I created this word generator to help you come up with the best fake word ideas. They can be great for naming your website, business, product or project. Fake words or pseudowords are words which look like they are real, but actually have no meaning.',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/14386767-150a1ede549eb290.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 3,
            title: 'Fake Word Generator',
            desc: 'It is quite a task thinking up great made-up words that are unique, so I created this word generator to help you come up with the best fake word ideas. They can be great for naming your website, business, product or project. Fake words or pseudowords are words which look like they are real, but actually have no meaning.',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/14386767-150a1ede549eb290.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 4,
            title: 'Fake Word Generator',
            desc: 'It is quite a task thinking up great made-up words that are unique, so I created this word generator to help you come up with the best fake word ideas. They can be great for naming your website, business, product or project. Fake words or pseudowords are words which look like they are real, but actually have no meaning.',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/14386767-150a1ede549eb290.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}