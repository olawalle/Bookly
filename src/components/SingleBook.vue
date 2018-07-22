<template>
    <div class="wrap">
        <div class="pagination">
            <span class="page">All books</span> > <span class="page">English Literature</span>
        </div>
        <b-row class="row">
                <b-col>
                    <span class="book-title">
                        Americanah
                    </span>
                    <div class="">
                        <pdf src="../assets/pdf/Othello.pdf"></pdf>
                        <!-- <embed src="../assets/pdf/Othello.pdf" width="100px" height="600px" /> -->
                        <!-- <img src="../assets/logo.svg" alt="" width="50px"> -->
                    </div>
                </b-col>
        </b-row>
    </div>
</template>

<script>
// pdf viewer
import pdf from 'vue-pdf'
export default {
    data () {
        return {
        }
    },
    components: {
        pdf
    }
}
</script>

<style scoped>
    .page {
        color: #959595;
        margin-left: 20px
    }
    .book-view {
        /* background-color: blue */
    }
</style>
