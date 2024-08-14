---
custom_edit_url: null
---

# Quy trình bán hàng

Từng bước diễn ra khi khách hàng đến trải nghiệm dịch vụ và mua sắm ở cửa hàng.

## Kịch bản thường gặp

**Bước 1:** Chào hỏi và làm quen với khách (mới). Nắm bắt rõ nhu cầu của khách đến cửa hàng.

**Bước 2:** Nếu khách mua mang đi thì có thể bỏ qua bước này. Nếu khách ngồi lại thì mời khách đi gửi xe.

Địa chỉ gửi xe: Chung cư 137 Bùi Hữu Nghĩa.

**Bước 3:** Nếu là khách mới hãy tìm hiểu các thông tin cần thiết của khách (Customer Insight) 

- Làm cách nào khách biết đến shop (facebook, youtube, bạn bè giới thiệu, ...)
- Khách quan tâm đến mặt hàng nào (Yugi TCG, Yugi OCG, One Piece, Lorcana,...)
- Khả năng chi tiêu của khách (bóc pack, single, in card,...)

**Bước 4:** Khi khách đến để giao lưu ngồi lại, nhớ thường xuyên chào mời hàng cho khách mua:

- Mời bóc pack
- Mời uống nước
- Mời ăn mỳ/bánh

**Bước 5:** Khi khách mua hàng tiến hành thực hiện `kịch bản bán hàng`.

![Chung cư 137 Bùi Hữu Nghĩa](/img/chung-cu-137-bui-huu-nghia.png)

## Kịch bản bán hàng

```mermaid
stateDiagram-v2
    direction TB
    [*] --> yswsii
    yswsii: Khách thanh toán
    state yswsii {
        direction TB
        state if_state <<choice>>
        if_state --> a1: Chuyển khoản/Momo
        if_state --> a2: Tiền mặt
        a1: Chụp ảnh giao dịch
        a2: Thu tiền và để vào hộp

        a2 --> [*]
        a1 --> [*]
    }
    yswsii --> yswsii2
    yswsii2: Báo cáo
    state yswsii2 {
        direction TB
        state if_state2 <<choice>>
        a3: Tạo giao dịch trên `admin`
        a4: Gửi tin nhắn Messenger
        a5: Chụp ảnh single \n Chụp rõ mã card và note giá bán
        if_state2 --> a3: Mặt hàng tồn tại trên hệ thống
        if_state2 --> a4: Mặt hàng không có trên hệ thống
        if_state2 --> a5: Đối với card Single
        a3 --> [*]
        a4 --> [*]
        a5 --> [*]
    }
    s5:Đưa hàng cho khách
    yswsii2 --> s5
    s5 --> [*]
```

:::note[Ghi chú]

Tham khảo thêm __Hỗ trợ kĩ thuật__ để biết ` Tạo giao dịch ` trên hệ thống `admin`

:::