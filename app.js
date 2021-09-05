const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: 'titleA', author: 'authorA', img: 'assets/facebook-logo-300x300.jpeg', isFav: true},
        { title: 'titleB', author: 'authorB', img: 'assets/Instagram-logo-300x300.jpeg', isFav: false},
        { title: 'titleC', author: 'authorC', img: 'assets/twitter-logo-300x300.png', isFav: true},
      ],
      url : "https://ja.wikipedia.org/"
    }
  },
  methods: {
    changeTitle(title) {
      this.title = title
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks 
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter( (book) => book.isFav )
    }
  }
})

app.mount('#app')