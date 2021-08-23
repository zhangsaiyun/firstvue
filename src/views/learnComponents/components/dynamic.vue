<template>
  <div class="">
    <h2>动态组件&amp;异步组件</h2>

    <h5>
      （1）在动态组件上使用keep-alive<br/>
      保持组件状态，避免反复重渲染导致的性能问题
    </h5>
    <el-row>
      <el-col :span="18" :offset="3">
        <div class="dynamic-component-demo">
          <button
            v-for="tab in tabs"
            v-bind:key="tab"
            v-bind:class="['tab-button', { active: currentTab === tab }]"
            v-on:click="currentTab = tab"
          >
            {{ tab }}
          </button>

          <keep-alive>
            <component :is="currentTabComponent" class="tab"></component>
          </keep-alive>
        </div>
      </el-col>
    </el-row>

    <h5>
      （2）异步组件
    </h5>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentTab: 'Posts',
      tabs: ['Posts', 'Archive']
    }
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  },
  components: {
    'tab-posts': {
      data () {
        return {
          posts: [
            {
              id: 1,
              title: 'Cat Ipsum',
              content:
                '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around.</p>'
            },
            {
              id: 2,
              title: 'Hipster Ipsum',
              content:
                '<p>Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.</p>'
            },
            {
              id: 3,
              title: 'Cupcake Ipsum',
              content:
                '<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.</p>'
            }
          ],
          selectedPost: null
        }
      },
      template: `
        <div class="posts-container">
          <ul>
            <li
              v-for="post in posts"
              :key="post.id"
              :class="{ selected: post === selectedPost }"
              @click="selectedPost = post">
              {{ post.title }}
            </li>
          </ul>
          <div class="selected-post-container">
            <div
              v-if="selectedPost"
              class="selected-post">
              <h3>{{ selectedPost.title }}</h3>
              <div v-html="selectedPost.content"></div>
            </div>
            <strong v-else>
              Click on a blog title to the left to view it.
            </strong>
          </div>
        </div>
      `
    },
    'tab-archive': {
      template: '<div>Archive component</div>'
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="less">
  .dynamic-component-demo{
    .active{
      background-color: #999;
    }
  }
</style>
<style lang="less">
  .tab{
    display: flex;
    border: 1px solid #ddd;
    padding: 10px;
  }

  .posts-container{
    ul, li{
      list-style: none;
      margin: 0;
      padding: 0;
      line-height: 24px;
    }

    ul{
      width: 130px;
      border-right: 1px solid #ddd;
      padding-top: 10px;
      padding-right: 10px;
      margin-right: 10px;
    }

    .selected{
      background-color: #999;
    }

    .selected-post-container{
      flex: 1;
    }
  }
</style>
