<template>
    <BaseCard>
        <h2>Register as a teacher now!</h2>
        <CoachForm></CoachForm>
    </BaseCard>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
    components: {
        CoachForm
    }
}
</script>