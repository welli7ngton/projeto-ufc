<template>
    <section class="slider">
        <div class="slider-content">
            <input type="radio" name="btn-radio" id="radio1" v-model="selectedRadio" value="1">
            <input type="radio" name="btn-radio" id="radio2" v-model="selectedRadio" value="2">
            <input type="radio" name="btn-radio" id="radio3" v-model="selectedRadio" value="3">

            <div class="slide-box primeiro">
                <img class="img-desktop" src="../../public/img/banner/Joker.svg" alt="slide 1: Banner do filme Joker">
            </div>

            <div class="slide-box">
                <img class="img-desktop" src="../../public/img/banner/The_Godfather.svg"
                    alt="slide 2: Banner do filme O Poderoso Chefão">
            </div>

            <div class="slide-box">
                <img class="img-desktop" src="../../public/img/banner/Dune 2.svg"
                    alt="slide 3: Banner do filme Duna Parte 2">
            </div>

            <div class="nav-auto">
                <div :class="['auto-btn', { 'active': selectedRadio === '1' }]"></div>
                <div :class="['auto-btn', { 'active': selectedRadio === '2' }]"></div>
                <div :class="['auto-btn', { 'active': selectedRadio === '3' }]"></div>
            </div>
            <div class="nav-manual">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio2" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Banner',
    data() {
        return {
            selectedRadio: '1',
        }
    },
    methods: {
        proximaImg() {
            this.selectedRadio = (parseInt(this.selectedRadio) % 3 + 1).toString();
        }
    },
    mounted() {
        setInterval(this.proximaImg, 5000);
    }
}
</script>

<style scoped>
.slider {
    margin: 0 auto;
    width: 100%;
    padding: 0px;
    overflow: hidden;
    position: relative;
    margin-top: 45px;
}

.slider-content {
    display: flex;
    width: 300%;
    transition: transform 0.5s ease;
}

.slider-content input {
    display: none;
}

.slide-box {
    width: 33.3333%;
    height: auto;
    text-align: center;
}

.slide-box img {
    width: 100%;
    height: auto;
    transition: 1s;
}

.nav-manual,
.nav-auto {
    position: absolute;
    width: 100%;
    bottom: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
}

.nav-manual .manual-btn,
.nav-auto div {
    border: 1px solid #E3DA17;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    background: rgb(234, 234, 234);
    transition: 0.3s;
}

.nav-manual .manual-btn:hover {
    background: #E3DA17;
}

.nav-auto .auto-btn.active {
    z-index: 100;
    background-color: #E3DA17;
}

#radio1:checked ~ .primeiro{
    margin-left: 0%;
    transition: 1s;
}
#radio2:checked ~ .primeiro{
    margin-left: -33.333%;
    transition: 1s;
}
#radio3:checked ~ .primeiro{
    margin-left: -66.666%;
    transition: 1s;
}
</style>