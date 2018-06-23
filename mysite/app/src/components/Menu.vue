<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <router-link to="/" class="navbar-brand">Home</router-link>

        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                    <router-link to="/menu1" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu1</router-link>
                    <div class="dropdown-menu" aria-labelledby="dropdown09">
                        <router-link to="/menu1/menu11" class="dropdown-item">Menu11</router-link>
                        <router-link to="/menu1/menu12" class="dropdown-item">Menu12</router-link>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <router-link to="/menu2" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu2</router-link>
                    <div class="dropdown-menu" aria-labelledby="dropdown09">
                        <router-link to="/menu2/menu21" class="dropdown-item">Menu21</router-link>
                        <router-link to="/menu2/menu22" class="dropdown-item">Menu22</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style scoped>

</style>
