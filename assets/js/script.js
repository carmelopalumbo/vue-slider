// vue

const { createApp } = Vue;

createApp({

    data(){
        return{

            // array di oggetti
            cities:[
                {
                    name: 'New York',
                    people: '8,468 milioni abitanti',
                    descr: 'Si trova alla foce del fiume Hudson. Manhattan, il suo cuore pulsante, è considerato uno dei poli commerciali più importanti al mondo.',
                    image: 'assets/img/new-york.jpg'
                },
            
                {
                    name: 'Parigi',
                    people: '2,161 milioni abitanti',
                    descr: 'Capitale della Francia, è una delle città più importanti di Europa, centro mondiale di arte, moda, gastronomia e cultura.',
                    image: 'assets/img/parigi.jpg'
                },
            
                {
                    name: 'Roma',
                    people: '2,873 milioni abitanti',
                    descr: 'Capitale dell’Italia, è una grande città cosmopolita con una storia artistica, architettonica e culturale che ha influenzato tutto il mondo e che risale a quasi 3000 anni fa.',
                    image: 'assets/img/roma.jpeg',
                },
            
                {
                    name: 'Barcellona',
                    people: '1,62 milioni abitanti',
                    descr: 'La cosmopolita capitale della regione spagnola della Catalogna, è celebre soprattutto per arte e architettura.',
                    image: 'assets/img/barcellona.jpg'
                },
            
                {
                    name: 'Berlino',
                    people: '3,645 milioni abitanti',
                    descr: 'La capitale della Germania, fu fondata nel XIII secolo. Il Memoriale dell Olocausto e le parti restanti del muro di Berlino, testimoniano la difficile storia della città nel corso del XX secolo.',
                    image: 'assets/img/berlino.jpg'
                }
            ],

            counterImg: 0,

            // data vuoto che verra' inzializzata successivamente come funzione
            autoplayFunc : ''
        }
    },

    methods:{

        //gestione click delle thumb
        changeImg(index){
            this.counterImg = index;
        },

        //gestione dei button
        nextPrev(checkImg){
            checkImg ? this.counterImg++ : this.counterImg--;
            this.checkLoop();
        },

        // check dello scorrimento infinito dello slider
        checkLoop(){
            if(this.counterImg > this.cities.length - 1){
                this.counterImg = 0;
            }

            if(this.counterImg < 0){
                this.counterImg = this.cities.length - 1;
            }
        },

        //imposta lo scorrimento automatico
        getAutoSlides(){
          this.autoplayFunc =  setInterval(() => {
                this.nextPrev(true);
            }, 3000);
           
        },

        //stoppa lo scorrimento automatico
        stopSlides(){
            clearInterval(this.autoplayFunc)
        }
    },

    mounted(){
        //imposta lo scorrimento automatico al caricamento della pagina
        this.getAutoSlides();
    }

}).mount("#app")