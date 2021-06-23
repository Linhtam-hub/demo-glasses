<template>
  <b-container>
    <div className="row position-img my-5">
      <img
        :src="url"
        alt=""
        className="img-thumbnail img-fluid mr-3"
        id="product"
      />
      <div id="info">
        <h5>NAME: {{ name }}</h5>
        <p>PRICE:{{ price }}$</p>
        <p>DESCRIPTION:{{ desc }}</p>
      </div>
      <img
        src="../glassesImage/model.jpg"
        alt=""
        className="img-model mr-3"
        id="model"
        width="400"
        height="500"
      />
      <img
        src="../glassesImage/model.jpg"
        alt=""
        className="img-model mr-3"
        width="400"
        height="500"
      />
    </div>

    <div className=" bg-light no-gutter mt-5">
      <b-container>
        <b-row class="d-flex justify-content-center">
          <span v-for="item in arrProduct" :key="item.id">
            <b-col cols="4"
              ><img
                class="img-item"
                :src="item.url"
                width="200"
                height="100"
                @click="changeImage(item)"
            /></b-col>
          </span>
        </b-row>
      </b-container>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "product-list",
  data() {
    return {
      name: "",
      price: "",
      desc: "",
      url: "",
      arrProduct: [
        {
          id: 1,
          price: 80,
          name: "GUCCI G8850U",
          url: "../glassesImage/v1.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },

        {
          id: 2,
          price: 50,
          name: "GUCCI G8759H",
          url: "../glassesImage/v2.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },

        {
          id: 3,
          price: 70,
          name: "DIOR D6700HQ",
          url: "../glassesImage/v3.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },

        {
          id: 4,
          price: 300,
          name: "DIOR D6005U",
          url: "../glassesImage/v4.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },

        {
          id: 5,
          price: 500,
          name: "PRADA P8750",
          url: "../glassesImage/v5.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },

        {
          id: 6,
          price: 40,
          name: "PRADA P9700",
          url: "../glassesImage/v6.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },

        {
          id: 7,
          price: 90,
          name: "FENDI F8750",
          url: "../glassesImage/v7.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },

        {
          id: 8,
          price: 50,
          name: "FENDI F8500",
          url: "../glassesImage/v8.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },

        {
          id: 9,
          price: 80,
          name: "FENDI F4300",
          url: "../glassesImage/v9.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
      ],
    };
  },
  methods: {
    changeImage(data) {
      this.name = data.name;
      this.price = data.price;
      this.desc = data.desc;
      this.url = data.url;
    },
  },
};
</script>

<style lang="css" scoped>
.img-model {
  background-color: #282c34;
  -webkit-box-shadow: -9px 9px 16px 5px rgba(0, 0, 0, 0.8);
  box-shadow: -9px 9px 16px 5px rgba(0, 0, 0, 0.8);
  z-index: 999999999;
}
#model {
  position: relative;
  z-index: -1;
}
#product {
  position: absolute;
  top: 220px;
  left: 447px;
  z-index: 20;
  width: 230px;
  opacity: 0.6;
  background: none;
  border: none;
}

.img-model {
  margin: 5px;
  background-color: #282c34;
  -webkit-box-shadow: -9px 9px 16px 5px rgba(0, 0, 0, 0.8);
  box-shadow: 9px 16px 5px rgba(0, 0, 0, 0.8);
  z-index: 999999999;
}
.img-item {
  border: 1px solid #cdcdce;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  background-color: #daeff5;
}
.position-img {
  position: relative;
}
#info {
  position: absolute;
  top: 465px;
  left: 360px;
  z-index: 20;
  width: 400px;
  height: 120px;
  opacity: 0.6;
  color: white;
  background-color: #0b1aec;
}
</style>