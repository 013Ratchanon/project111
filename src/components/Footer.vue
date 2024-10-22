<template>
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2024 One Piece Card Game. All rights reserved.</p>
            <div class="social-links">
                <a href="https://www.facebook.com" target="_blank">Facebook</a>
                <a href="https://www.twitter.com" target="_blank">Twitter</a>
                <a href="https://www.instagram.com" target="_blank">Instagram</a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style scoped>
.footer {
    background-color: #222;
    color: #fff;
    padding: 20px;
    text-align: center;
    margin-top: 40px;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
}

.social-links a {
    margin: 0 10px;
    color: #3498db;
    text-decoration: none;
}

.social-links a:hover {
    text-decoration: underline;
}
</style>
