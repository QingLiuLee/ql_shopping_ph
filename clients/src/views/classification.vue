<template>
  <div class="mall-classify">
    <van-nav-bar title="商品分类" left-arrow class="mall-head">
      <van-icon name="apps-o" slot="right" />
    </van-nav-bar>

    <div class="mall-classify-con">
      <div class="mall-classify-con-l">
        <ul>
          <li
            v-for="(item,index) in classifyList" :key="index"
            @click="checkClassity(index)"
            :class="{'active':current === index}"
          >
            <span>{{item}}</span>
            <div class="item-bar"></div>
          </li>
        </ul>
      </div>
      <div class="mall-classify-con-r">
        <div class="mall-classify-con-item"
             v-for="(item, index) in itemData[current].item"
             :key="index"
        >
          <h3>{{item.name}}</h3>
          <ul>
            <li
              v-for="(itemC, indexC) in item.list"
              :key="indexC"
            >
              <div><img :src="hdImages[index]" alt=""></div>
              <p>{{itemC.name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
/**
 * @author hui
 * @date 2019/5/21
 * @Description: 分类
 */
export default class Classification extends Vue {
    private classifyList: string[] = [
        '生鲜', '零食', '水果', '美妆', '女装', '男装', '洗护', '百货'];
    private current: number = 0;
    private hdImages: string[] = [
        require('../assets/images/sp_01.jpg'),
        require('../assets/images/sp_02.jpg'),
        require('../assets/images/sp_03.jpg'),
        require('../assets/images/sp_04.jpg'),
        require('../assets/images/sp_05.jpg'),
        require('../assets/images/sp_06.jpg')
    ];

    private itemData: any = [
        {
            name: '生鲜',
            item: [
                {
                    name: '生鲜1',
                    list: [
                        {
                            name: '生鲜',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '生鲜',
                            img: require('../assets/images/sp_01.jpg'),
                        }
                    ]
                },
                {
                    name: '生鲜2',
                    list: [
                        {
                            name: '生鲜',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '生鲜',
                            img: require('../assets/images/sp_01.jpg'),
                        }
                    ]
                },
                {
                    name: '生鲜3',
                    list: [
                        {
                            name: '生鲜',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '生鲜',
                            img: require('../assets/images/sp_01.jpg'),
                        }
                    ]
                }
            ]
        },
        {
            name: '零食',
            item: [
                {
                    name: '零食1',
                    list: [
                        {
                            name: '布丁',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '薯片',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '饼干',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '果冻',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '坚果',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '辣条',
                            img: require('../assets/images/sp_01.jpg'),
                        }
                    ]
                },
                {
                    name: '零食2',
                    list: [
                        {
                            name: '布丁',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '薯片',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '饼干',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '果冻',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '坚果',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '辣条',
                            img: require('../assets/images/sp_01.jpg'),
                        }
                    ]
                },
                {
                    name: '零食3',
                    list: [
                        {
                            name: '布丁',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '薯片',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '饼干',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '果冻',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '坚果',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '辣条',
                            img: require('../assets/images/sp_01.jpg'),
                        }
                    ]
                }
              ]
        },
        {
            name: '水果',
            item: [
                {
                    name: '水果1',
                    list: [
                        {
                            name: '香蕉',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '苹果',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '葡萄',
                            img: require('../assets/images/sp_01.jpg'),
                        }
                    ]
                },
                {
                    name: '水果2',
                    list: [
                        {
                            name: '葡萄',
                            img: require('../assets/images/sp_01.jpg'),
                        },
                        {
                            name: '草莓',
                            img: require('../assets/images/sp_01.jpg'),
                        }
                    ]
                }
            ]
        }
    ];

    // 切换类别
    private checkClassity(index: number) {
        this.current = index;
    }
}
</script>
