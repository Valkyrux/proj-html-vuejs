<template>
  <div class="h-100 ms_card">
    <div class="h-100 position-relative">
        <img class="w-100" :src="require(`../../assets/img/${courseObj.imgName}`)" alt="">
        <div  v-if="courseObj">
            <div class="p-3 ms_card-content">
                <small>{{courseObj.category}} &gt;</small>
                <h2>{{courseObj.name}}</h2>
                    <div class="ms_card-footer">
                        <div>
                            <span v-if="courseObj.time">
                                <font-awesome-icon :icon="[ 'far', 'clock' ]" />
                                {{courseObj.time}}</span>
                            <span v-else>{{courseObj.user_vote}}</span>
                        </div>
                        <div>
                            <div v-if="courseObj.discount">
                                <div class="ms_old-price">{{courseObj.price}}</div>
                                <div class="fw-bold">{{courseObj.discount}}</div>
                            </div>
                            <div v-else>
                                <div class="fw-bold">{{courseObj.price}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    courseObj: Object,
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/partials/_variables.scss";

.ms_card {
    border: 1px solid $athens-gray;
    & small {
        font-size: 0.8em;
        color: $gull-gray;
    }
    & h2 {
        font-size: 1em;
    }
    & .ms_card-content {
        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 40px;
        }
    }
    & .ms_card-footer {
        width: calc(100% - 32px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        border-top: 1px solid $athens-gray;
        position: absolute;
        bottom: 10px;
        & .ms_old-price {
            font-size: 0.8em;
            color: $gull-gray;
            text-decoration: line-through;
        }
    }
}
</style>
