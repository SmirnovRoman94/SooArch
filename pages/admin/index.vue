<template>
    <div>
        <Header :pageName="this.page" @hideMenu="OnMenu"/>
        <transition name="fade">
            <Menu  v-show="menu" @close="menu = false" />
        </transition>
        <section>
            <div class="container">
                <header class="header_admin">
                    <nuxt-link class="link_admin" v-for="link in links" :key="link.id" :to="link.name">{{link.title}}</nuxt-link>
                </header>
            </div>
            <div class="container">
                <h3 class="admin_header">Правила пользования админкой</h3>
                <div class="admin_item">
                    <h3 class="admin_header">Прайс лист(Pricing)</h3>
                    <ul class="admin_content"><i>Редактирование прайс-листа</i>
                        <li>1. Заходим во вкладку Pricing выбираем тот прайс, который хотим отредактировать => нажимаем => переходим в форму. </li>
                        <li>2. В форме вносим изменения. </li>
                        <li>3. ЗАГРУЗКА ФОТОГРАФИЙ!!! если фото уже есть у данного прайса то просто нажимаем на кнопку ВЫБЕРИТЕ ФАЙЛ и загружаем новую (старая фотография сама удалиться).</li>
                        <li>4. Когда все изменения сделал нажимаем на кнопку СОХРАНИТЬ;</li>
                        <li>5. Если изменения не надо делать у данного прайсва (зашли случайно) нажимаем кнопку ЗАКРЫТЬ; </li>
                    </ul>
                    <ul class="admin_content"><i>Создание НОВОГО прайс-листа</i>
                        <li>1. Нажимаем на кнопку NEW PRICE ;</li>
                        <li>2. Заполняем все поля и после нажимае на кнопку ДОБАВИТЬ ТАРИФ</li>
                    </ul>
                </div>
                <div class="admin_item">
                    <h3 class="admin_header">Портфолио(Portfolio)</h3>
                    <ul class="admin_content"><i>Создание НОВОЙ карточки портфорио</i>
                        <li>1. Заходим во вкладку Portfolio. Далее нажимаем на NEW WORK => переходим в форму</li>
                        <li>2. Поле "ССЫЛКА НА ГЛАВНУЮ КАРТИНКУ" заполняется сама как только загруцзишь фотографию;</li>
                        <li>3. Номер картинки на английском (one, two ....) ЗАПОЛНАТЬ ОБЯЗАТЕЛЬНО! И ТОЛЬКО АНГЛИЙСКИМ СЛОВОМ КАК НАПИСАНО</li>
                        <li>4. !!!! ВНИМАНИЕ !!! только первые восемь товаров будут отображаться на главной странице. А все работыф можно посмотреть уже на вкладке portfolio на сайте!</li>
                        <li>5. EXAMPLE это пункты статьи про работу Так же !!!СНАЧАЛА!!! загружаем картинку и пишем текст(поле ниже). После нажимаем на кнопку ДОБАВИТЬ ПУНКТ</li>
                        <li>6. РЕДАКТИРОВАНИЕ ПУНКТА ПРЕДУСМОТРЕНО ТОЛЬКО ТЕКСТ!!!</li>
                        <li>7. Как все сделал нажимаем на кнопку ДОБАВИТЬ РАБОТУ</li>
                    </ul>
                    <ul class="admin_content"><i>Редактирование карточки портфорио</i>
                        <li>1. Тут просто нажимаешь на поля и редактируешь после нажимаем на кнопку СОХРАНИТЬ</li>
                    </ul>
                </div>
                <div class="admin_item">
                    <h3 class="admin_header">Blog</h3>
                    <ul class="admin_content"><i>Содание НОВОГО поста</i>
                        <li>1. Заходим во вкладку BLOG. Далее нажимаем на NEW POST => переходим в форму</li>
                        <li>2. В форме предусмотрено заполнить поле автора (НАДО заполнять)!</li>
                        <li>3. Пункты поста как и в WORK работает также</li>
                        <li>4. Необходимо еще добавлять ТЕГИ поста. Пишешь тег и нажимаешь кнопку ДОБАВИТЬ ТЕГ</li>
                    </ul>
                    <ul class="admin_content">
                        <li>1. Редактирование поста происходит по аналогии как и редактирование работы (Work)</li>
                    </ul>
                </div>
                <div class="admin_item">
                    <h3 class="admin_header">Комментарии</h3>
                    <ul class="admin_content">
                        <li>1. Заходим во вкладку Коментарии (Сomments) попадаем в таблицу ТАБЛИЦУ МОЖНО ПРОКРУЧИВАТЬ по ширине</li>
                        <li>2. Тут написаны все комментарии которые оставляют пользователи, измачально они попадают сюда, ты смотриши нравится ли тебе комментарий и после чего меняешь СТАТУС на PUBLISH (надать на ссылку Change Status => после чго данный комментарий появляется на страинце сайта! </li>
                        <li>3. Если комментарий не нравится то его можно удалить (нажать на ссылку DELETE)</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Menu from '~/components/system/Menu'
import Header from '~/components/system/header'
export default {
    layout: 'admin',
    components: {
        Menu,
        Header
    },
    data(){
        return{
            links: [
                {
                    id:1,
                    name: '/admin/blog',
                    title: 'Blog'
                },
                {
                    id:2,
                    name: '/admin/comments',
                    title: 'Comments'
                },
                {
                    id:3,
                    name: '/admin/portfolio',
                    title: 'Portfolio'
                },
                {
                    id:4,
                    name: '/admin/pricing',
                    title: 'Pricing'
                }
            ],
            menu: false,
            page: {
                title: 'Admin',
                link: '/admin',
                linkTitle: 'admin'
            },
        }
    },
    methods: {
        OnMenu() {
            this.menu = true;
        },
    }
}
</script>

<style lang="scss" scoped>
.header_admin{
    padding: 4em 0 ;
    background-color: #4a5562;
    display: flex;
    justify-content: space-around;
    .link_admin{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        border-bottom: 1px solid #fff;
        transform: .3s;
        &:hover{
            font-size: 25px;
        }
    }
}
.admin_header{
    padding-top: 2em;
    font-size: 30px;
    font-style: italic;
    font-weight: 400;
}
.admin_content{
    padding: 1em;
}
</style>