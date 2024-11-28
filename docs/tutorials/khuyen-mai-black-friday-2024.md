---
custom_edit_url: null
---

# Khuyến mãi Black Friday 2024

## Nội dung

> Mỗi lần mua 01 Đơn hàng ở shop nếu tổng giá trị (Sau khi trừ giảm giá) đạt được các mốc bên dưới, khách sẽ được **quay số may mắn 01 lần**.
> Có 4 tier tùy theo giá trị đơn hàng.
> Mỗi đơn hàng chỉ áp dụng **1 voucher DUY NHẤT**.

> Check in ở shop được 1 lần rút **Tier 1 (Một lần DUY NHẤT)**.

:::warning[Lưu ý]

Khách được tham gia nhiều lần miễn đơn hàng đạt yêu cầu.

:::

### Tier 1

Đơn hàng dưới 50k `(<=50k)` 1 lần rút
Random giảm 5-10k đơn tiếp theo.

### Tier 2

Đơn hàng từ 51k đến dưới 100k `(>50k, <= 100k)` 1 lần rút
Random giảm 10k-20k cho đơn tiếp theo.

### Tier 3

Đơn hàng từ 100k đến 500k `(> 100k, <=500k)` 1 lần rút
Random giảm 20k-50k cho đơn tiếp theo.

### Tier 4

Đơn hàng trên 500k `(> 500k)`
Random giảm 50k-100k cho đơn tiếp theo hoặc 1 pack (ngẫu nhiên).

## Triển khai

### Quy trình

#### Đối với đơn không áp dụng khuyến mãi

1. Tạo giao dịch trên admin như bình thường

1. Kết Tổng bill của khách + thu tiền

1. Nếu tổng tiền bill của khách nằm trong Tier nào thì báo với khách là được rút và note lại voucher của khách.

:::danger[Lưu ý]

Voucher đơn này sẽ được áp dụng cho đơn tiếp theo.

::::

#### Đối với đơn hàng có áp dụng voucher

1. Tạo giao dịch trên admin

    1. Thêm các món khách mua như bình thường

    1. Add thêm voucher [Trên admin có sẵn các voucher (5, 10, 15, 20, 30, 50, 100)].

1. Kết Tổng bill của khách + thu tiền

1. Nếu tổng tiền bill (sau khi đã trừ khuyến mãi) của khách nằm trong Tier nào thì báo với khách là được rút và note lại voucher của khách.

:::note[Ví dụ]
Khách mua pack 120k áp dụng voucher trừ 50k -> tổng đơn là 70k

-> Vậy khách chỉ nhận được 1 lần quay Tier 1 (70k < 100k) thay vì Tier 3.
:::

#### Đối với đơn trúng pack

Khi khách quay trúng pack thì lấy pack đó cho khách + báo admin bao gồm
- Tên khách
- Các gói voucher sao cho tổng bằng với giá pack

:::note[Ví dụ]
- Pack RA02 giá 220k = 2 voucher 100k + 2 voucher 10k
- Pack OP08 giá 180k = 1 voucher 100k + 1 voucher 50k + 1 voucher 30k
:::

### Link mở vòng quay may mắn

- Tier 1: https://wheelofnames.com/dfj-wkf

- Tier 2: https://wheelofnames.com/6as-cwn

- Tier 3: https://wheelofnames.com/kx4-xmq

- Tier 4: https://wheelofnames.com/tvb-zc6
