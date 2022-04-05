import Vue from 'vue';

import Heart from 'vue-material-design-icons/Heart'
import Twitter from 'vue-material-design-icons/Twitter'
import Facebook from 'vue-material-design-icons/Facebook'
import Instagram from 'vue-material-design-icons/Instagram'
import Message from 'vue-material-design-icons/Message'
import Magnify from 'vue-material-design-icons/Magnify'
import WhatsApp from 'vue-material-design-icons/Whatsapp'
import ChevronRight  from 'vue-material-design-icons/ChevronRight'
import ExitToApp from 'vue-material-design-icons/ExitToApp'
import ArrowUp from 'vue-material-design-icons/ArrowUp'


export default function materialIcons(){
    Vue.component('HeartMdi', Heart);
    Vue.component('TwitterMdi', Twitter);
    Vue.component('FacebookMdi', Facebook);
    Vue.component('InstagramMdi', Instagram);
    Vue.component('MessageMdi', Message);
    Vue.component('MagnifyMdi', Magnify);
    Vue.component('WhatsappMdi', WhatsApp);
    Vue.component('ChevronRightMdi', ChevronRight);
    Vue.component('ExitToAppMdi', ExitToApp);
    Vue.component('UpMdi', ArrowUp);

}