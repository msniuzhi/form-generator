<template>
  <div>
    <PhotoWall v-model="imageList" />
  </div>
</template>

<script>
import PhotoWall from '@/components/customer/PhotoWall'

export default {
  components: {
    PhotoWall
  },
  data() {
    return {
      imageList: [
        'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
        'https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_640.jpg',
        'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg',
        'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_640.jpg'
      ]
    }
  }
}
</script>
