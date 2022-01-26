<template>
  <div class="h-100 ms_card" :class="courseObj.feature?'ms_feature':''">
    <div class="h-100 position-relative">
        <small class="position-absolute text-uppercase fw-bold text-light ms_label"
        :class="'ms_' + courseObj.label">{{courseObj.label}}</small>
        <img class="w-100" :src="require(`../../assets/img/${courseObj.imgName}`)" alt="">
        <div  v-if="courseObj">
            <div class="p-3 ms_card-content">
                <small>{{courseObj.category}} &gt;</small>
                <h2 class="mt-2 mb-3">{{courseObj.name}}</h2>
                <div class="ms_card-footer">
                    <div>
                        <span v-if="courseObj.time">
                            <font-awesome-icon :icon="[ 'far', 'clock' ]" />
                            {{courseObj.time}}</span>
                        <span v-else>
                            <span v-for="vote in 5" :key="courseObj.name + vote">
                                <font-awesome-icon :icon="[ 'fas', 'star' ]"
                                :class="vote <= courseObj.user_vote ?
                                'ms_star-yellow':'ms_star-gray'"/></span>
                        </span>
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
    &.ms_feature {
        border: 1px solid $golden-tainoi;
    }
    & .ms_label {
        top: 10px;
        right: 10px;
        padding: 2px 5px;
        border-radius: 3px;
        font-size: 0.7em;
        &.ms_new {
            background-color: $shamrock-2;
        }
        &.ms_hot {
            background-color: $red;
        }
        &.ms_special {
            background-color: $golden-tainoi;
        }
    }
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
        & .ms_star-yellow {
            color: goldenrod;
        }
        & .ms_star-gray {
            color: $gull-gray;
        }
        & .ms_old-price {
            font-size: 0.8em;
            color: $gull-gray;
            text-decoration: line-through;
        }
    }
}
</style>
