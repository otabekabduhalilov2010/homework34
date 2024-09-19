const catalog = [
    {
        img: 'https://gufhtugu.com/wp-content/uploads/2020/06/rich-dad-poor-dad.png',
        name: 'Rich Dad',
        years: '2005',
        description: 'Book is very good and cool',
        Price: '34 000'
    },
    {
        img: 'https://www.jimcollins.com/images/books/g2g.png',
        name: 'Good to Great',
        years: '2015',
        description: 'Book dont good  ',
        Price: '44 000'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagLfG-M6TVRQNK3yNDL2TwfV3f_k3-fsFDA&s',
        name: 'Time',
        years: '1998',
        description: 'Book is very good and cool because cheap',
        Price: '20 000'
    }
]

const wrapper = document.querySelector('.wrapper')


catalog.forEach(card => {
        wrapper.innerHTML += `
        <div class="card">
                     <img src="${card.img}" alt="">
                    <h1>${card.name}</h1>
                    <h3>${card.years}</h3>
                    <p>${card.description}</p>
                    <h4>${card.Price}</h4>
                </div>
        `
})