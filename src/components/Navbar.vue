<template>
    <nav class="navbar">
        <router-link to="/" class="logo-link">
            <img src="@/assets/image4.png" alt="One Piece Card Game Logo" class="logo">
        </router-link>
        <ul class="nav-links">
            <li class="nav-item">
                <RouterLink to="/beginners" class="nav-link">For Beginners</RouterLink>
            </li>
            <li class="nav-item"><router-link to="/topics" class="nav-link">Topics</router-link></li>
            <li class="nav-item"><router-link to="/products" class="nav-link">Products</router-link></li>
            <li class="nav-item">
                <RouterLink to="/events" class="nav-link">Events</RouterLink>
            </li>
            <li class="nav-item"><router-link to="/cardlist" class="nav-link">Cardlist</router-link></li>
            <li class="nav-item"><router-link to="/rules" class="nav-link">Rules</router-link></li>
            <!-- เพิ่มลิงค์ไปยัง Page.vue -->
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #F5E3CB;
}

.logo-link {
    display: inline-block;
    /* ให้โลโก้เป็นลิงก์ */
}

.logo {
    height: 64px;
}

.nav-links {
    display: flex;
    gap: 20px;
}

.nav-item {
    color: rgb(17, 1, 1);
    cursor: pointer;
    font-size: 18px;
    transition: color 0.3s;
}

.nav-item:hover {
    color: #f39c12;
}

/* เพิ่มสไตล์สำหรับลิงก์ */
.nav-link {
    text-decoration: none;
    /* ไม่ให้มีเส้นขีดใต้ลิงก์ */
    color: inherit;
    /* ให้สีของลิงก์เป็นไปตาม nav-item */
}

.nav-link:hover {
    color: #f39c12;
    /* เปลี่ยนสีเมื่อ hover */
}
</style>
