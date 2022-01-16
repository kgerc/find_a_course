<template>
    <BaseCard>
        <h2>Register as a teacher now!</h2>
        <CoachForm @save-data="saveData"></CoachForm>
    </BaseCard>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
    components: {
        CoachForm
    },
    methods:{
        saveData(data) {
            this.$store.dispatch('coaches/registerCoach', data);
            this.$router.replace('/coaches');
        }
    }
}
</script>