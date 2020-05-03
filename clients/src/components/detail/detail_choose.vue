<template>
    <div class="d-discount-cp">
        <span>
          <span class="block">产品</span>
        </span>
        <div>
            <p>颜色分类</p>
            <p>
                <img :src="item" alt=""  v-for="(item, index) in images" :key="index">
            </p>
        </div>
        <span class="fr" @click="showStu"><i class="icon-right"></i></span>

        <div v-show="showBase">
            <van-sku
                    v-model="showBase"
                    :sku="sku"
                    :goods="goods"
                    :goods-id="skuData.goodsId"
                    :hide-stock="sku.hide_stock"
                    :quota="quota"
                    :quota-used="quotaUsed"
                    :reset-stepper-on-hide="resetStepperOnHide"
                    :reset-selected-sku-on-hide="resetSelectedSkuOnHide"
                    :close-on-click-overlay="closeOnClickOverlay"
                    :disable-stepper-input="disableStepperInput"
                    @buy-clicked="onBuyClicked"
                    @add-cart="onAddCartClicked"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Emit} from 'vue-property-decorator';
    import { Sku, Toast } from 'vant';
    Vue.use(Sku).use(Toast);

    @Component({})
    export default class Detail extends Vue {
        /*prop*/
        @Prop() private images!: any[];

        /*data*/
        private showBase: boolean = false;
        private quota: number = 5;
        private quotaUsed: number = 0;
        private resetStepperOnHide: boolean = true;
        private resetSelectedSkuOnHide: boolean = true;
        private closeOnClickOverlay: boolean = true;
        private disableStepperInput: boolean = true;
        /*showBase: object = {
            // 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
            // 值：skuValueId（规格值 id）
            s1: '30349',
            s2: '1193',
            // 初始选中数量
            selectedNum: 3
        }*/

        private sku: any = {
            tree: [
                {
                    k: '颜色', // skuKeyName：规格类目名称
                    v: [
                        {
                            id: '30349', // skuValueId：规格值 id
                            name: '红色', // skuValueName：规格值名称
                            imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
                        },
                        {
                            id: '30348',
                            name: '蓝色',
                            imgUrl: 'https://img.yzcdn.cn/2.jpg'
                        }
                    ],
                    k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                },
                {
                    k: '尺寸',
                    v: [
                        {
                            id: '01',
                            name: 'S',
                        },
                        {
                            id: '02',
                            name: 'M',
                        }
                    ],
                    k_s: 's2',
                }
            ],
            // 所有 sku 的组合列表，比如红色、M 码，红色、S 码
            list: [
                {
                    id: 11, // skuId，下单时后端需要
                    price: 100, // 价格（单位分）
                    s1: '30348', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '01', // 规格类目 k_s 为 s2 的对应规格值 id
                    s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                    stock_num: 110 // 当前 sku 组合对应的库存
                },
                {
                    id: 12,
                    price: 100,
                    s1: '30348',
                    s2: '02',
                    s3: '0',
                    stock_num: 110
                },
                {
                    id: 13,
                    price: 100,
                    s1: '30349',
                    s2: '01',
                    s3: '0',
                    stock_num: 110
                },
                {
                    id: 14,
                    price: 100,
                    s1: '30349',
                    s2: '02',
                    s3: '0',
                    stock_num: 110
                }
            ],
            price: '113.00', // 默认价格（单位元）
            stock_num: 227, // 商品总库存
            collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
            none_sku: false, // 是否无规格商品
            messages: [
                {
                    // 商品留言
                    datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                    multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                    name: '留言', // 留言名称
                    type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                    required: '1' // 是否必填 '1' 表示必填
                }
            ],
            hide_stock: false // 是否隐藏剩余库存
        };

        private goods: any = {
            // 商品标题
            title: '测试商品',
            // 默认商品 sku 缩略图
            picture: 'https://img.yzcdn.cn/2.jpg'
        };

        private skuData: any = {
            // 商品 id
            goodsId: '946755',
            // 留言信息
            messages: {
                message_0: '12',
                message_1: ''
            },
            // 另一种格式的留言，key 不同
            cartMessages: {
                // '留言1': 'xxxx'
            },
            // 选择的商品数量
            selectedNum: 1,
            // 选择的 sku 组合
            /*selectedSkuComb: {
                id: 2257,
                price: 100,
                s1: '30349',
                s2: '1193',
                s3: '0',
                stock_num: 111
            }*/
        };

        private showStu() {
            this.showBase = !this.showBase;
        }

        private onBuyClicked() {}

        private onAddCartClicked() {}
    }

</script>

<style scoped lang="scss"></style>
