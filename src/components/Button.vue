<script setup>
const props = defineProps({
    buttonText: {
        type: String,
        default: 'Button'
    },
    color: {
        type: String,
        validator(value, props) {
            return [
                'dark',
                'primary',
                'link',
                'info',
                'success',
                'warning',
                'danger'
            ].includes(value);
        }
    },
    size: {
        type: String,
        validator(value, props) {
            return [
                'small',
                'medium',
                'large',
            ].includes(value);
        },
        default: 'large'
    }
});

let classes = '';
if(props.color) {
    classes+='is-'+props.color;
}
classes+=' is-'+props.size;
</script>

<template>
    <div class="container">
        <button class="button" :class="classes" @click="">
            {{ buttonText }}
        </button>
    </div>
</template>