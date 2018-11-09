<template>
  <div class='picker' :class="{ 'picker-3d': rotateEffect }">
    <div class="picker-toolbar" v-if="showToolbar"><slot></slot></div>
    <div class="picker-items">
      <picker-slot
        v-for="(slot, index) in slots"
        :key='index'
        :valueKey="valueKey"
        :values="slot.values || []"
        :text-align="slot.textAlign || 'center'"
        :visible-item-count="visibleItemCount"
        :class-name="slot.className"
        :flex="slot.flex"
        :value="values[slot.valueIndex]"
        :rotate-effect="rotateEffect"
        :divider="slot.divider"
        :content="slot.content"
        :itemHeight="itemHeight"
        :default-index="slot.defaultIndex"
      >
      </picker-slot>
      <div class="picker-center-highlight" :style="{height: itemHeight + 'px', marginTop: -itemHeight / 2 + 'px'}"></div>
    </div>
  </div>
</template>

<script>
import PickerSlot from './picker-slot'

export default {
  name: 'mt-picker',
  props: {
    slots: {
      type: Array
    },
    showToolbar: {
      type: Boolean,
      default: false
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    valueKey: String,
    rotateEffect: {
      type: Boolean,
      default: false
    },
    itemHeight: {
      type: Number,
      default: 36
    }

  },
  data () {
    return {}
  },
  components: {
    PickerSlot
  },
  computed: {
    values: {
      get () {
        var slots = this.slots || []
        var values = []
        var valueIndexCount = 0
        slots.forEach(slot => {
          if (!slot.divider) {
            slot.valueIndex = valueIndexCount++
            values[slot.valueIndex] = (slot.values || [])[slot.defaultIndex || 0]
          }
        })
        return values
      }
    }
  },
  methods: {
    slotValueChange () {
      this.$emit('change', this, this.values)
    }
    // setSlotValue (index, values) {
    //   var slot = this.getSlot(index)
    //   if (slot) {
    //     slot.mutatingValues = values
    //   }
    //   console.log(index, values, 'sssss')
    // }
  },
  created () {
    this.$on('slotValueChange', this.slotValueChange)
    this.slotValueChange()
  }
}
</script>

<style>
 .picker {
    overflow: hidden;
  }
  .picker-toolbar {
    height: 40px;
  }
  .picker-items {
    display: flex;
    justify-content: center;
    padding: 0;
    text-align: right;
    font-size: 24px;
    position: relative;
  }
  .picker-center-highlight {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    width: 100%;
    top: 50%;
    margin-top: -18px;
    pointer-events: none
  }
  .picker-center-highlight:before,
  .picker-center-highlight:after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: #eaeaea;
    display: block;
    z-index: 15;
    transform: scaleY(0.5);
  }
  .picker-center-highlight:before {
    left: 0;
    top: 0;
    bottom: auto;
    right: auto;
  }
  .picker-center-highlight:after {
    left: 0;
    bottom: 0;
    right: auto;
    top: auto;
  }
</style>
