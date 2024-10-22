<template>
    <div class="guide-container">
        

        <!-- แทรกรูปภาพ -->
        <img src="@/assets/onepiece-guide.jpg" alt="One Piece Guide" class="guide-image">
        <h2>คู่มือในการเล่น</h2>
        <p>
            ยินดีต้อนรับเข้าสู่ One Piece Card Game!
            ในเกมนี้คุณจะได้ต่อสู้กับผู้เล่นอื่นด้วยการใช้การ์ดตัวละครที่คุณโปรดปราน
            จากการ์ตูนยอดนิยม One Piece
            โดยผู้เล่นแต่ละคนจะต้องจัดเด็คของตัวเองและต่อสู้ด้วยการใช้การ์ดให้เกิดประโยชน์สูงสุด
        </p>
        <p>
            การชนะในเกมนี้ขึ้นอยู่กับการวางแผนที่ดีและการตัดสินใจในสถานการณ์ต่าง ๆ มาสร้างทีมของคุณและออกผจญภัยได้เลย!
        </p>
        <ul>
            <li>เรียนรู้กฎการเล่นและกฎของการ์ดแต่ละใบ</li>
            <li>สร้างเด็คของคุณเองจากการ์ดที่มี</li>
            <li>เข้าร่วมแข่งขันและพบกับผู้เล่นคนอื่น</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Guide'
};
</script>

<style scoped>
.guide-container {
    padding: 20px;
    background-color: #eef2f3;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
    font-size: 24px;
    margin-bottom: 16px;
}

p {
    font-size: 16px;
    margin-bottom: 10px;
}

ul {
    margin-left: 20px;
    list-style-type: disc;
}

ul li {
    font-size: 16px;
    margin-bottom: 8px;
}

/* เพิ่มการตกแต่งรูปภาพ */
.guide-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
