# 4. Rıza Durumları  
ÖHK, Ödeme Emri Başlatma Hizmetine ya da Hesap Bilgisi Hizmetine müşteri rızasının tesisi ile başlar. ÖHK’nın YÖS uygulaması üzerinden yaptığı işlemler neticesinde rıza durumları değişebilir. 
Rıza’nın alabileceği durum kodları şu şekilde belirlenmiştir.
  
**B: Yetki Bekleniyor** – İlk rıza talebinde    
**Y: Yetkilendirildi** – Başarılı GKD sonrası yetKod üretildiğinde  
**K: Yetki Kullanıldı** – Erişim Belirteci alındığında  
**E: Yetki ödeme emrine dönüştü** – ÖBHS için  
**S: Yetki Sonlandırıldı**    
&nbsp;&nbsp;&nbsp;&nbsp;HBHS için : Erişimin Geçerli Olduğu Son Tarih geldiğinde  
&nbsp;&nbsp;&nbsp;&nbsp;ÖBHS için : Yenileme belirteci Son Tarihi geldiğinde  
**I :Yetki Iptal**  
Rıza iptal durumu ise gerek raporlama gerekse müşteri deneyimi perspektifinden doğru   bilgilendirmeler yapılabilmesi açısından aşağıdaki gibi detay kodları ile zenginleştirilmiştir:

>**Rıza Iptal Detay Kodu:** 

>>**‘01’ :	Yeni Rıza Talebi ile İptal**  
>>**‘02’ :	Kullanıcı İsteği ile HHS üzerinden İptal**  
>>**‘03’ :	Kullanıcı İsteği ile YÖS üzerinden İptal**  
>>**‘04’ :	Süre Aşımı : Yetki Bekleniyor**  
>>**‘05’ :	Süre Aşımı : Yetkilendirildi**  
>>**‘06’ :	Süre Aşımı : Yetki Ödemeye Dönüşmedi**  
>>**‘07’ :	GKD iptali : Aynı rıza no ile mükerrer çağrımı**  
>>**‘08’ :	GKD iptali : Rızano ile TCKN uyuşmaması**  
>>**‘09’ :	GKD iptali : Uygun ürünü bulunmuyor**  
>>**‘10’ :	GKD iptali : HHS Açık Bankacılık kanalı işleme kapalı**  
>>**’11’ :	GKD iptali : Hesap Yetki Sorunu**  
>>**‘12’ :	GKD iptali : ÖHK HHS müşterisi değil**  
>>**‘13’ :	GKD iptali : ÖHK HHS kontrollerini aşamadı**  
>>**‘14’ :	GKD iptali : Başarısız GKD**  
>>**‘15’ :	GKD iptali : ÖHK isteği ile GKD’den vazgeçildi**  
>>**‘16’ :	GKD iptali : Diğer**  

4.1 ve 4.2 bölümlerinde detaylandırılan rıza durum değişikliklerinde statü kodları kullanılmıştır.

**Örneğin B&#8680; I/01 denildiğinde “Yetki Bekleniyor” statüsünden “Yetki İptal” statüsüne Rıza Iptal Detay Kodu da ‘01’ yani ‘Yeni Rıza Talebi ile İptal’ olarak güncellenmelidir ifade edilmiştir.**  

ÖHK verdiği rıza sırasında seçtiği hesaplarından biri kapatılırsa, diğer hesaplara ait bilgileri görmeye devam eder. Ancak ÖHK’nın hesabına ait bilgilerinin YÖS'e iletilmesini istemediği durumda, rızasını tamamen iptal ederek yeni hesap listesi ile yeni rıza vermesi gerekmektedir. Yani hesap kapanması nedeniyle rıza geçerliliğini yitirmez. Müşterinin proaktif olarak bu hesabı rızadan çıkarması durumunda rıza iptali olur.   

Rıza iptal edilmediği ve geçerli olduğu sürece kapalı hesaplar için diğer çevrimiçi kanallarda uygulanan yöntem izlenmelidir. Diğer çevrimiçi kanallarda kapalı hesaplara ilişkin bilgi dönülmüyor ise ÖHVPS'den de dönüş yapılmaz. ÖHK’nın rıza onayı verdiği açık hesaplarının tümü HHS tarafında kapatıldığı durumda, yine aynı şekilde HHS çevrimiçi kanallarında koyduğu kurallara göre bu hesaplarının YÖS uygulamasında gösterilmesine karar verir.  

Hesap kapama ve ticari kullanıcıların hesaplar üzerindeki yetki değişiklikleri HHS'nin iç sistemleri tarafından yapılan kontrollerle yönetilir. Buradaki değişiklikler ile HHS sistemsel olarak rıza iptali gerçekleştiremez. Müşteri izni ve onayı dahilinde rıza iptal gerçekleştirilmesi gerekmektedir.  

## 4.1.	Hesap Bilgisi Hizmeti Rıza durum değişiklikleri

**Kural**: 1 ÖHK'nın 1 YÖS için 1HHS'de Y, K, B statüsünde 1 rızası olabilir.
Bir ÖHK hem kişisel olarak hem de bir kurumun kullanıcısı olabilir. Bu durumda kurum ve kişisel rıza aynı anda mevcut olabilmelidir. Rıza nesneleri, HHS tarafından uygun şekilde yönetilmelidir.  

 1.	Hesap Bilgisi Rızası isteği HHS’ye iletilir.  
    a.	HHS müşteriye ait içeride rıza var mı kontrol eder. Eğer yoksa RIZA = B Yetki Bekleniyor tipinde yeni rıza no oluşturur.  
    b.	Eğer içeride rıza varsa   
    &nbsp;&nbsp;&nbsp;&nbsp; i. **Rıza tipi Yetki Bekleniyor (B) ise** HHS, sistemde Yetki Bekleniyor (B) statüsünde kayıt olduğu için, öncelikle eski kaydı Iptal(I) statüsüne getirir. Rıza İptal Detay Kodu “Yeni Rıza Talebi ile iptal” olmalıdır. **B &#8680; I / 01** Sonrasında, **Yetki Bekleniyor (B)** statüsünde yeni rıza oluşturur.   
    
    &nbsp;&nbsp;&nbsp;&nbsp; ii. **Rıza Tipi Yetkilendirildi (Y) ve Yetki Kullanıldı (K) ise** Müşterinin halihazırda verilmiş bir rızası vardır. HHS, önce rıza iptali yapılmasına dair hata döner. **TR.OBHS.Resource.ConsentMismatch**

    &nbsp;&nbsp;&nbsp;&nbsp; iii.	**Rıza tipi Yetki Sonlandırıldı(S) ise** **Yetki Bekleniyor (B)** tipinde yeni rıza no oluşturur.  

    &nbsp;&nbsp;&nbsp;&nbsp; iv.	**Rıza tipi Iptal (I) ise** **Yetki Bekleniyor (B)** tipinde yeni rıza no oluşturur.

 2.	GKD başarılı bir şekilde tamamlandığında Rıza durumu Yetki Bekleniyor’dan Yetkilendirildi’ye güncellenir. **B &#8680; Y**

    - GKD'nin gerçekleşmediği durumlardan HHS haberdar olmayabilir.    

      Müşteri GKD yapmadan ayrılmış olabilir. (ÖR: Tarayıcıyı kapatmış olabilir) Rıza Yetki Bekleniyor (B) statüsünde kalır.  5 dakika içerisinde sistem tarafından Yetki Bekleniyor (B) statüsündeki kayıtlar Yetki İptal  : Yetki Bekleniyor Süre Aşımı olarak güncellenir.  **B &#8680; I / 04** Bkz. 9. Madde.

    - GKD'nin gerçekleşmediği durumlardan HHS haberdardır. HHS yonlendirme adresinin query parametrelerine **rizaIptDtyKod** değerini ekleyerek bu durumu YÖS’e bildirmek zorundadır.

      - Rıza durumunun  “Yetkilendirildi" , “Yetki Kullanıldı” olduğu durum.  Yetki Bekleniyor &#8680; Yetki Iptal  **B &#8680;  I / 07**  
   
      - Rızano ile kimlik bilgileri uyuşmazlığı.  Yetki Bekleniyor &#8680; Yetki Iptal **B &#8680; I / 08**

      - ÖHK'nın HHS'de ilgili ürününün olmadığı durum (hesap/kart) Yetki Bekleniyor &#8680; Yetki Iptal  **B &#8680;I / 09**   

      - Açık bankacılık kanalınız işleme kapalıdır.Yetki Bekleniyor &#8680; Yetki Iptal **B &#8680;I / 10**  

      - Kullanıcının HHS'deki hesaplarında yeterli yetkisinin olmama durumu  Yetki Bekleniyor &#8680; Yetki Iptal **B &#8680; I / 11**  

      - ÖHK'nın ilgili HHS müşterisi olmadığı durum Yetki Bekleniyor &#8680; Yetki Iptal **B &#8680; I / 12**  

      - HHS’nin ÖHK için yaptığı kontrollerin başarısız olduğu durum Yetki Bekleniyor &#8680; Yetki Iptal  **B &#8680; I / 13**

      - Müşteri kendini doğrulayamamış olabilir. Başarısız GKD Yetki Bekleniyor &#8680; Yetki Iptal **B &#8680; I / 14**

      - ÖHK isteği ile GKD’den vazgeçildiği durum Yetki Bekleniyor &#8680; Yetki Iptal **B &#8680; I / 15**  

      - Diğer Yetki Bekleniyor &#8680;  Yetki Iptal  **B &#8680;  I / 16**  


3.	Müşteri hesaplarında/izin türlerinde/Erişimin Geçerli Olduğu Son Tarih bilgilerinden bir ya da birden fazlasında güncelleme yapmak için YÖS ekranına girer.   

   &nbsp;&nbsp;&nbsp;&nbsp;a.	YÖS önce Rıza İptal API'sini çağırır. Sonra yeni değerlerle yeni bir rıza isteğinde bulunur. Tekrar GKD gerekir.  

   &nbsp;&nbsp;&nbsp;&nbsp;b.	YÖS rıza iptal yapmadan yeni rıza alma akışına başlarsa 1.b akışı devreye girer.  

   &nbsp;&nbsp;&nbsp;&nbsp;c.	Rıza güncelleme ilerleyen sürümlerde ele alınacaktır.

4. Erişim Belirteci API çağrımı yapıldığında; HHS, rıza numarasının Y - Yetkilendirildi statüsünde olduğunu kontrol etmelidir. Y statüsünde ise erişim belirteci tahsis edilir.
     Y statüsünde değil ise **TR.OBHS.Resource.ConsentMismatch** hatası verilmelidir.  
Erişim belirteci alındığında rıza durumu K: Yetki Kullanıldı yapılır. **Y &#8680;K**  

5.	Sorgulama: HBHS, rıza alma akışına başlamadan önce, daha önce oluşturulmuş bir hesap bilgisi-rizasi kaynağının durumunu, isteğe bağlı olarak alabilir. Rıza numarası ile sorgulama yapılır.

6.	Hesap Bilgisi Rızasının İptali: HBHS üzerinden ya da HHS üzerinden yapılan rıza iptallerinde Rıza statüsü  İptal Edildi olarak güncellenir. Rıza numarası ile iptal sağlanır.

    a. HHS üzerinden rıza iptali yapmış olabilir.  Rıza durumu sorgulanır. 
   
    Rıza numarası B- Yetki Bekleniyor ve Y-Yetkilendirildi ve K Kullanıldı statüsüne sahip ise iptal statüsüne getirilir. Rıza gnclzmn timestamp ile güncellenir.
    HHS, Rıza iptalinde aynı zamanda erişim belirtecini de invalid hale getirmelidir.

    **B &#8680; I / 02**  
    **Y &#8680; I / 02**  
    **K &#8680; I / 02**  

    b.	YÖS üzerinden yapılacak iptal işleminde yine Y ve B ve K statüsünde ise iptal edilebilir.   

    **B &#8680; I / 03**  
    **Y &#8680; I / 03**  
    **K &#8680; I / 03**  

      Rıza numarası Yetki Sonlandırıldı (S) statüsüne sahip ise iptal gerçekleşmez. “Rıza'nız iptal edilebilecek statüde değildir.” hatası müşteriye yansıtılır. **TR.OBHS.Resource.ConsentMismatch**  

7.	ÖHK’nın verdiği rıza süresi dolmuş olabilir. 
Erişimin Geçerli Olduğu Son Tarih geldiğinde Rıza durumu Yetki Kullanıldı’dan Yetki Sonlandırıldı durumuna çekilmelidir.  **K &#8680; S**  

8.	Hesaplar, Bakiye ve işlemler servislerinde erişim belirteci kontrolü ve sonrasında rıza kontrolü yapılmalıdır. Geçerli bir erişim belirteci yok ise **TR.OBHS.Connection.InvalidToken** hatası dönülmelidir. Rıza durumu "K: Yetki Kullanıldı" dışındaki statülerde işleme devam edilmemelidir. Bu durumda aşağıdaki hata iletilmelidir:  
**TR.OBHS.Resource.ConsentMismatch**  

    YÖS bu servisleri çağırırken ÖHK rızası iptal statüsünde ise bu iptal HHS üzerinden yapılmış olabilir. (YÖS kendi uygulamasından iptal akışını gerçekleştirdiğinde, yeni rıza alarak işlemlere başlayacağı düşünülmektedir. Ancak yine de YÖS tarafından sorgulama yapılırsa ConsentRevoked hatası HHS’den dönmelidir.) Rıza durumu Iptal ve Rıza Iptal Detay Kodu 2 ise YÖS’ün HHS’ üzerinden yapılmış İptal’den haberdar olabilmesi için aşağıdaki hata kodu iletilmelidir:  

    **TR.OBHS.Resource.ConsentRevoked**  

      Rıza sorgulama, Rıza iptal API'lerinde ilgili rıza kaydı bulunamaz veya sorgulayan kurumun yetkisi yoksa (örn : YÖS’ün farklı bir YÖS’e ait rıza noyu sorgulaması)  
**TR.OBHS.Resource.NotFound hatası** verilmelidir.  

9.	HHS/YÖS tarafında rıza bilgileri belirli aralıklarla sistem kullanıcısı tarafından taranır:
5 dakikadan uzun süredir “Yetki Bekleniyor” statüsünde kalan kayıtların statüleri güncellenir.
Yetki Bekleniyor  &#8680; Rıza İptal  / Süre Aşımı : Yetki Bekleniyor **B &#8680; I / 04**  

      5 dakikadan uzun süredir “Yetkilendirildi” statüsünde kalan kayıtlar statüleri güncellenir.
      Yetkilendirildi     &#8680; Rıza İptal / Süre Aşımı: Yetkilendirildi **B &#8680; I / 05**  
      Yukarıda bahsedilen, YÖS Süre Aşımı nedeniyle rıza iptal statüsü güncellemelerini yapmadan önce HHS’yi sorgulayarak rıza durumunu öğrenmeli ve süre aşımı dışında bir kodu varsa aynı kodla kendi sistemini güncellemelidir.   
      Erişimin Geçerli Olduğu Son Tarih geldiğinde rıza statüsü Yetki Kullanıldı’dan Yetki Sonlandırıldı’ya güncellenir. **K &#8680; S**


## 4.2.	Ödeme Bilgisi Hizmeti Rıza Durum Değişiklikleri

**Kural**: 1 ÖHK'nın 1 YÖS için 1HHS'de istediği kadar rızası olabilir.
Kurum ve kişisel rıza aynı anda mevcut olabilmelidir. Rıza nesneleri, HHS tarafından uygun şekilde yönetilmelidir.

1.	Ödeme Emri Rızası isteği HHS’ye iletilir. İçeride rıza olup olmamasına bakılmaksızın Yetki Bekleniyor (B) tipinde yeni rıza no oluşturur.   

2.	GKD başarılı bir şekilde tamamlandığında Rıza durumu Yetki Bekleniyor’dan Yetkilendirildi’ye güncellenir.  **B &#8680; Y**  

    - GKD'nin gerçekleşmediği durumlardan HHS haberdar olmayabilir.  

      Müşteri GKD yapmadan ayrılmış olabilir. (ÖR: Browserı kapatmış olabilir)
      Rıza Yetki Bekleniyor (B) statüsünde kalır.  5 dakika içerisinde sistem tarafından Yetki Bekleniyor (B) statüsündeki kayıtlar Rıza İptal  :Yetki Bekleniyor Süre Aşımı olarak güncellenir. Bkz. 9. Madde.

    - GKD'nin gerçekleşmediği durumlardan HHS haberdardır. HHS yonlendirme adresinin query parametrelerine rizaIptDtyKod değerini ekleyerek bu durumu YÖS’e bildirmek zorundadır.
   
      - Rıza durumunun  “Yetkilendirildi" , “Yetki Kullanıldı” olduğu durum.  Yetki Bekleniyor &#8680; Yetki Iptal  **B &#8680;  I / 07**  
   
      - Rızano ile kimlik bilgileri uyuşmazlığı.  Yetki Bekleniyor &#8680; Yetki Iptal **B &#8680; I / 08**

      - ÖHK'nın HHS'de ilgili ürününün olmadığı durum (hesap/kart) Yetki Bekleniyor &#8680; Yetki Iptal  **B &#8680;I / 09**   

      - Açık bankacılık kanalınız işleme kapalıdır.Yetki Bekleniyor &#8680; Yetki Iptal **B &#8680;I / 10**  

      - Kullanıcının HHS'deki hesaplarında yeterli yetkisinin olmama durumu  Yetki Bekleniyor &#8680; Yetki Iptal **B &#8680; I / 11**  

      - ÖHK'nın ilgili HHS müşterisi olmadığı durum Yetki Bekleniyor &#8680; Yetki Iptal **B &#8680; I / 12**  

      - HHS’nin ÖHK için yaptığı kontrollerin başarısız olduğu durum Yetki Bekleniyor &#8680; Yetki Iptal  **B &#8680; I / 13**

      - Müşteri kendini doğrulayamamış olabilir. Başarısız GKD Yetki Bekleniyor &#8680; Yetki Iptal **B &#8680; I / 14**

      - ÖHK isteği ile GKD’den vazgeçildiği durum Yetki Bekleniyor &#8680; Yetki Iptal **B &#8680; I / 15**  

      - Diğer Yetki Bekleniyor &#8680;  Yetki Iptal  **B &#8680;  I / 16** 

3.	GKD muafiyeti olduğunda YÖS HHS’den arka planda onay alır. Bu onay sırasında rıza durumu **Yetkilendirildi** yapılır.  
**B &#8680; Y**    

4.	Erişim Belirteci API çağrımı yapıldığında; HHS, rıza numarasının Y - Yetkilendirildi statüsünde olduğunu kontrol etmelidir. Y statüsünde ise erişim belirteci tahsis edilir.
Y statüsünde değil ise **TR.OBHS.Resource.ConsentMismatch** hatası verilmelidir.  
Erişim belirteci alındığında rıza durumu **K: Yetki Kullanıldı** yapılır. **Y &#8680; K** 

5.	Ödeme Başlatma API rıza kontolü ile işleme başlamalıdır.
Rıza durumu "K: Yetki Kullanıldı” dışındakiler için  işleme devam edememelidir. Bu durumda aşağıdaki hata iletilmelidir: **TR.OBHS.Resource.ConsentMismatch**  

      Eğer rıza iptal statüsünde ise YÖS’ün haberi olması için bir hata kodu dönülür. **TR.OBHS.Resource.ConsentRevoked** 

6.	Sorgulama: GKD işleminin başarıyla tamamlanıp Ödeme Emri Rızasının yetkilendirilmesi esnasında, gönderen hesap seçiminin HHS ekranında yapıldığı durumlarda, ödeme emri isteğinde gönderen hesap bilgileri alanının zorunlu olması nedeniyle, ödemeEmriRizasi nesnesi sorgulanarak gönderen hesap bilgileri (hesap numarası ve/veya hesap referansı) alınmalıdır.
Rıza sorgulama, Ödeme Emri Sorgulama API'lerinde ilgili rıza kaydı bulunamaz veya sorgulayan kurumun yetkisi yoksa (örn : YÖS’ün farklı bir YÖS’e ait rıza noyu sorgulaması)  
**TR.OBHS.Resource.NotFound** hatası verilmelidir.  

7.	Ödeme Emri Rızasının İptali bulunmamaktadır.  

8.	Ödeme Emri gerçekleştiğinde K: Yetki Kullanıldı Statüsü E: Yetki ödeme emrine dönüştü ye döner. **K &#8680; E** 

9.	HHS/YÖS tarafında rıza bilgileri belirli aralıklarla sistem kullanıcısı tarafından taranır:
5 dakikadan uzun süredir “Yetki Bekleniyor”  statüsünde kalan kayıtların statüleri güncellenir.
Yetki Bekleniyor &#8680; Rıza İptal / Süre Aşımı : Yetki Bekleniyor **B &#8680; I / 04**
 
      5 dakikadan uzun süredir “Yetkilendirildi” statüsünde kalan kayıtlar statüleri güncellenir.
      Yetkilendirildi     &#8680; Rıza İptal / Süre Aşımı : Yetkilendirildi **B &#8680; I / 05**

      5 dakikadan uzun süredir “Yetki kullanıldı” statüsünde kalan kayıtlar statüleri güncellenir.
      Yetki kullanıldı &#8680; Rıza İptal / Süre Aşımı : Yetki Ödemeye Dönüşmedi **B &#8680; I / 06**

      Yenileme belirteci Son Tarih geldiğinde rıza statüsü Yetki ödeme emrine dönüştü’den Yetki Sonlandırıldı ya güncellenir.  
      **E &#8680; S**  

10.	GKD muafiyeti sadece ödeme başlatma servislerinde bulunmaktadır.





 





