import {ref} from 'vue'
function useColorPicker (arr){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const message = ref('Pick a color...')
    function matchColor (value){
        if (arr[randomNumber] === value) {
            message.value = `You win... [answer: ${arr[randomNumber]}]`;
            return;
        }
        message.value = `You loose [answer: ${arr[randomNumber]}]`;
    }
    return {matchColor, message}
}
export default useColorPicker