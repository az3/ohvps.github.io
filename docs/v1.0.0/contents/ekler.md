## EK-1: İstek/Cevap Mesajlarında Kullanılacak Nesne Yapıları

Açık Bankacılık simülatör uygulaması üzerinde swagger dökümanlarının güncel sürümlerine erişim sağlanabilir. 

## EK-2: Sıralı Veri Türleri

| Kod | Açıklama |
| --- | --- |
| TR.OHVPS.DataCode.KimlikTur | Kod, Tip, Format<br>K , TCKN , N11<br>M , MNO , AN1..30 (HHS’ye özel bireysel veya kurum müşteri numarası)<br>Y , YKN , N11<br>P , PNO , AN7..9 |
| TR.OHVPS.DataCode.KurumKimlikTur | Kod, Tip, Format<br>K , TCKN , N11<br>M , MNO , AN1..30 (HHS’ye özel bireysel veya kurum müşteri numarası)<br>V , VKN , N10|
| TR.OHVPS.DataCode.OhkTur | Kod:<br>B: Bireysel <br>K: Kurumsal |
| TR.OHVPS.DataCode.KolasTur | Müşterinin sorgulama istediği Kolay Adres Tipi değeridir. Alabileceği değerler BKM “Kolay Adresleme Sistemi Uygulama Kuralları” belgesinde tanımlıdır:<br>T: Telefon Numarası<br>E: E-Posta<br>K: TCKN<br>V: VKN<br>Y: YKN<br>P: Pasaport Numarası |
| TR.OHVPS.DataCode.KareKodAksTur | Karekod Akış Türü Karekod ödemesinin hangi akışla gerçekleştirildiğini gösterir.<br> 01: FAST katılımcısından dinamik doğrulamalı hizmet alınan işyeri ödemesi<br>02: FAST katılımcısından statik doğrulamalı işyeri ödemesi<br>03: Kişiden kişiye ödemeler |
| TR.OHVPS.DataCode.OdemeKaynak | I: İnternet bankacılığından gönderilen ödemelerde kullanılır.<br>A: Otomatik para makineleri (ATM) ile gönderilen ödemelerde kullanılır.<br>T: Telefon bankacılığı ile gönderilen ödemelerde kullanılır.<br>K: Kiosklar aracılığıyla gönderilen ödemelerde kullanılır.<br>S: Şubeden girilen ödemelerde kullanılır.<br>M: Mobil uygulamadan gönderilen ödemelerde kullanılır.<br>D: Yukarıdakiler dışındaki ödeme kaynaklarından gönderilen ödemelerde kullanılır.<br> O: Açık bankacılık aracılığı ile gönderilen ödemelerde kullanılır.<br> |
| TR.OHVPS.DataCode.OdemeAmaci | Ödemenin Amacına yönelik olarak aşağıdaki değerlerden birini alır:<br>01: Konut Kirası Ödemesi<br>02: İş yeri Kirası Ödemesi<br>03: Diğer Kira Ödemesi<br>04: E-Ticaret Ödemesi: Elektronik ticaret işlem amaçlı aktarımlar<br>05: Çalışan Ödemesi: Maaş, harcırah, prim gibi çalışan ödemeleri<br>06: Ticari ödeme: Ticari işletmelerin birbirlerine, kendi hesaplarına veya müşterilerine ödemeleri, borç, ithalat, ihracat, şirket satın alma, vb. kapsamında ödemeler<br>07: Bireysel Ödeme: Özel amaçlı (aile bireylerine, hediye, bağış, borç, alışveriş vs.) ödemeler<br>08: Yatırım: Mevduat, menkul kıymet, döviz, gayrı menkul, taşıt, varlık alımı, temettü ödeme, tahsilat vb. gibi yatırım amaçlı ödemeler<br>09: Finansal: Kredi, depo, repo, türev, finansal varlık alım/satımı vb. ödemeler<br>10: Eğitim ödemesi<br>11: Aidat ödemesi |
| TR.OHVPS.DataCode.OdemeDurumu | Ödemenin durumunu gösterir. Alabileceği değerler:<br>01: Gerçekleşti (Ödeme ilgili ödeme sistemine iletildi ve alıcı hesabına ulaştı. Hem gönderene hem de alıcıya anlık bildirim ulaştı. FAST ve HAVALE için geçerli)<br>02: Gönderildi (Ödeme ilgili ödeme sistemine iletildi ancak alıcı hesabına ulaştığına dair teyit alınmadı. PÖS ve FAST için geçerli)<br>03- Gerçekleşmedi (Ödemenin ilgili ödeme sistemine işletiminde veya işlenmesi sırasında hata, zaman aşımı, sistemin gün sonu işlemlerine başlaması vb. durum oluştu ve ödeme gereçeklemedi veya iade edildi.)<br>04- Onayda bekliyor (Ödeme emri alındı. Çoklu onay akışının tamamlanması bekleniyor.)<br>05- İşleme Alındı ( Ödeme emri alındı. ) YÖS tarafından müşteriye gösterilmeyen bir koddur. Bu kod dönüldüğünde YÖS uygulamasında ÖHK’ya ödeme durumu 01-Gerçekleşti olarak gösterilir. İşlemin son durumunun teyidi için YÖS sorgulama yapmalıdır.|
| TR.OHVPS.DataCode.IslemAmaci | Ödemenin Amacına yönelik olarak aşağıdaki değerlerden birini alır:<br>01: Konut Kirası Ödemesi<br>02: İş yeri Kirası Ödemesi<br>03: Diğer Kira Ödemesi<br>04: E-Ticaret Ödemesi: Elektronik ticaret işlem amaçlı aktarımlar<br>05: Çalışan Ödemesi: Maaş, harcırah, prim gibi çalışan ödemeleri<br>06: Ticari ödeme: Ticari işletmelerin birbirlerine, kendi hesaplarına veya müşterilerine ödemeleri, borç, ithalat, ihracat, şirket satın alma, vb. kapsamında ödemeler<br>07: Bireysel Ödeme: Özel amaçlı (aile bireylerine, hediye, bağış, borç, alışveriş vs.) ödemeler<br>08: Yatırım: Mevduat, menkul kıymet, döviz, gayrı menkul, taşıt, varlık alımı, temettü ödeme, tahsilat vb. gibi yatırım amaçlı ödemeler<br>09: Finansal: Kredi, depo, repo, türev, finansal varlık alım/satımı vb. ödemeler<br>10: Eğitim ödemesi<br>11: Aidat ödemesi<br>12: Diğer |
| TR.OHVPS.DataCode.RizaDurumu | B: Yetki Bekleniyor<br>Y: Yetkilendirildi<br>K: Yetki Kullanıldı<br>E: Yetki Ödeme Emrine Dönüştü<br>S: Yetki Sonlandırıldı<br>I :Yetki Iptal |
| TR.OHVPS.DataCode.GkdTur | GKD yapılmasını gerekli bulduğu durumda HHS, YÖS’ün belirlediği yöntemi dikkate alarak kendi belirlediği GKD yöntemini bildirir:<br>Y: Yönlendirmeli GKD<br>A: Ayrık GKD |
| TR.OHVPS.DataCode.RizaTip | H: Hesap Bilgisi Rızası<br>O: Ödeme Emri Rızası |
| TR.OHVPS.DataCode.IzinTur | 01: Temel Hesap Bilgisi<br>02: Ayrıntılı Hesap Bilgisi<br>03: Bakiye Bilgisi<br>04: Temel İşlem (Hesap Hareketleri) Bilgisi<br>05: Ayrıntılı İşlem Bilgisi|br
| TR.OHVPS.DataCode.OdemeSistemi | İşlemin yönlendirildiği Ödeme Sistemine göre aşağıdaki değerlerden birini alabilir:<br>H: Havale<br>F: FAST<br>E: EFT (PÖS)<br>değerlerinden birini alabilir.|
| TR.OHVPS.DataCode.IslemTuru | Hesap hareketleri (işlemler) sorgusunda dönülen İşlem Türü (islTur) parametresi aşağıdaki değerlerden birini alabilir:<br>HAVALE<br>EFT<br>FAST<br>PARA_YATIRMA<br>PARA_CEKME<br>YABANCI_PARA_HAVALE<br>YATIRIM_HESABINA_AKTARIM<br>YATIRIM_HESABINDAN_AKTARIM<br>KURUM_FATURA_ODEMESbr>CEK<br>SENET<br>SIGORTA_ODEMESI<br>UCRET_KOMISYON_FAIZ<br>SGK_ODEMESI<br>VERGI_ODEMESI<br>DOVIZ_ALIM<br>DOVIZ_SATIM<br>KREDI_ODEMESI<br>KREDI_KULLANIM<br>KK_ODEMESI<br>KK_NAKIT_AVANS<br>SANS_OYUNU<br>UYE_ISYERI_ISLEMLERI<br>HGS_OGS_ISLEMLERI<br>DOGRUDAN_BORCLANDIRMA_SISTEMI<br>DIGER<br>|
| TR.OHVPS.DataCode.HspTur | Hesabın bireysel veya ticari nitelikte olduğunu belirtir:<br>B: Bireysel<br>T: Ticari |
| TR.OHVPS.DataCode.KolasHspTur | Hesabın bireysel veya ticari nitelikte olduğunu belirtir:<br>B: Bireysel<br>T: Ticari |
| TR.OHVPS.DataCode.HspTip | Hesap çeşidini belirtir:<br>VADESIZ<br>VADELI<br>KREDILI MEVDUAT HESABI<br>POS<br>CEK<br>YATIRIM |
| TR.OHVPS.DataCode.HspDrm | Hesabın durumunu belirtir:<br>AKTIF<br>PASIF<br>KAPALI|
| TR.OHVPS.DataCode.YetTip | Alabileceği değerlere göre hangi belirtecin döneceğine karar verilir.<br>yet_kod<br>yenileme_belirteci |
| TR.OHVPS.DataCode.BrcAlc | İşlemin hesabı borçlandırdığı ya da alacaklandırdığı bilgisidir.<br>B : Borç<br>A : Alacak |
| TR.OHVPS.DataCode.RizaIptDtyKod | ‘01’ :Yeni Rıza Talebi ile İptal<br>‘02’ :Kullanıcı İsteği ile HHS üzerinden İptal<br>‘03’ :Kullanıcı İsteği ile YÖS üzerinden İptal<br>‘04’ :Süre Aşımı : Yetki Bekleniyor<br>‘05’ :Süre Aşımı : Yetkilendirildi<br>‘06’ :Süre Aşımı : Yetki Ödemeye Dönüşmedi<br>‘07’ :GKD iptali : Aynı rıza no ile mükerrer çağrımı<br>‘08’ :GKD iptali : Rızano ile TCKN uyuşmaması<br>‘09’ :GKD iptali : Uygun ürünü bulunmuyor<br>‘10’ :GKD iptali : HHS Açık Bankacılık kanalı işleme kapalı<br>’11’ :GKD iptali : Hesap Yetki Sorunu<br>‘12’ :GKD iptali : ÖHK HHS müşterisi değil<br>‘13’ :GKD iptali : ÖHK HHS kontrollerini aşamadı<br>‘14’ :GKD iptali : Başarısız GKD<br>‘15’ :GKD iptali : ÖHK isteği ile GKD’den vazgeçildi<br>‘16’ :GKD iptali : Diğer<br> |
| TR.OHVPS.DataCode.PSUInitiated | ‘E’ : Evet<br>‘H’ : Hayır |
| TR.OHVPS.DataCode.HHSYOSSrlmKrtr | ‘kod’ : Kod,‘unv’ : Unvan |
| TR.OHVPS.DataCode. SrlmYon | ‘A’: Azalan değerle sıralama<br>‘Y’: Artan değerle sıralama |

## EK-3: İstemci Sertifikalarının Tanım ve Yönetimi

YÖS rolü ile gelen katılımcılar BKM API Geçidi erişimlerini kendileri ile BKM tarafından önden paylaşılacak olan istemci sertifikalarını kullanarak sağlayacaklardır.  

Bu sertifikalar BKM bünyesinde oluşturulacak ve erişimde bulunacak olan kuruma özel olarak hazırlanacaktır. Hazırlanan istemci sertifikaları güvenli FTP veya e-posta aracılığı ile önden ilgili kişiler ile paylaşılacaktır.  

Sertifika doğrulama işlemi API Geçidi üzerinde yapılacak olup, istemci tarafında web isteğinin ilgili sertifika ile ilişkilendirilerek oluşturulması gerekecektir.  

Uzun dönemli olarak hazırlanacak olan sertifikalar test, sertifikasyon ve üretim ortamlarında kullanılacaktır. Sertifikaların işlevselliği ve geçerliliği bu aşamalarda  sınanacaktır.  

BKM API Geçidi çözümünün test ve üretim ortamları ayrımında istemci sertifikaları, HHS Listeleme API erişimleri ve  Sertifikasyon bağlantıları Şekil 15-HHS/YÖS API Mimarisi Diagramında resmedilmiştir.   

OpenSSL ile CSR (Certificate Signing Request) Oluşturma   
Aşağıdaki komut ile 2048-bit RSA private key ve CSR oluşturulur.  
openssl req -new -newkey rsa:2048 -nodes -keyout PRIVATEKEY.key -out CSR.csr  

CSR ile ilgili detay bilgilerin girişinde;   
Organization Unit Name (OU) olarak BKM tarafından size iletilen clientId değeri,   
Common Name (CN) olarak 4 karakterli yosKod değeri,  
Diğer alanlar için de kurum bilgilerinize göre giriş yapılır.   

Tüm bilgilerin girilmesinden sonra CSR dosyası imzalanmak üzere BKM ye iletilir. 


## EK-4: Sunucu Sertifikaları

Sunucu sertifikalarının endpoint bilgisini (Fqdn) içerecek ve global bir Certification Authority tarafından imzalanmış olarak sunulması gerekmektedir. 
Örneğin; entegrasyon formu içerinde yer alan URL bilgisinin (test.xbank.com.tr) sertifika içerisinde tanımlı olması ve bu sertifikanın global bir CA örneğin Verisign tarafından imzalanmış olarak sunulması gerekmektedir.


## EK-5: Mesaj İmzalama Akışı

Dijital imzalama yapısı, ÖHVPS API’de gerçekleştirilen işlemlerin ve taşınan verilerin bütünlük ve inkâr edilemezliğini sağlamak amacıyla kurgulanmıştır. 
Bu kapsamda imzalama akışı aşağıdaki gibi olmalıdır:  

- HHS ya da YÖS öncelikle özel ve açık anahtarlarını oluşturmalıdır. Bu anahtarları oluşturmak için aşağıda “openssl” kullanılarak oluşturma örneği paylaşılmıştır.  Bu anahtarlardan özel olan anahtar mesajı imzalamak için kullanılacak olup, açık anahtar ise mesajı doğrulamak amacıyla mesajın alıcısı tarafından kullanılacaktır.

private_key.pem ve public_key.pem dosyasinin içerikleri kod tarafında kullanılacaktır.

--private.pem => Özel anahtarın ismi
openssl genrsa -out private.pem 2048


--public_key.pem => Açık anahtarın ismi
openssl rsa -in private.pem -pubout -outform PEM -out public_key.pem

--private_key.pem => Özel anahtarın PCKS8 formatına çevrilmesi (Java açısından PCKS8 formatında olma ihtiyacı nedeniyle) openssl pkcs8 -topk8 -inform PEM -in private.pem -out private_key.pem -nocrypt

- Açık ve Özel anahtarlar oluşturulduktan sonra Açık Anahtar BKM ile paylaşılır. BKM bu açık anahtarı diğer katılımcıların ulaşabilmesi ve alabilmesi için bir Anahtar Deposu yaklaşımı ile bünyesinde tutar. İlgili anahtarı iletebilmek ve alabilmek için kullanılacak HHS/YOS API ye erişim detayları EK-6 bölümünde detaylı olarak paylaşılmıştır.  Eğer kurumun ilgili anahtar çiftinin yenilenme durumu söz konusu ise yenilemenin hemen ardından açık anahtar yeni bir imzalama yapılmadan önce mutlaka BKM ile paylaşılmalıdır.

- İmzalı mesajı açacak olan kurum mesajı imzalayan kurumun açık anahtarını her sorguda yeniden almak durumunda değildir. Belirli periyodlarda kendi ortamındaki anahtarı yenileyerek sistemi işletebilir. Ancak imzalayan kurum anahtar çifti yenilemesi yaptığında BKM ile açık anahtarını paylaşsa dahi imzalı mesajı doğrulayacak taraf eski açık anahtar ile doğrulama yapmaya çalıştığı için hata alacaktır. Bu ilk hata durumunda hızlıca BKM üzerinden yeni anahtarı alıp mesajı tekrar doğrulamayı denemelidir. Eğer yine hata alıyor ise doğrulama işlemini hata statüsüne almalıdır. Bu sebeple anahtar yenileyen kurum yeni açık anahtarını yeni bir mesaj imzalama yapmadan önce mutlaka BKM ile paylaşmalıdır.

### İmzalama Kuralları (YÖS)
Bir YÖS üzerinden başlayan akış örnek olarak paylaşılmıştır.
- YÖS, mesaj imzalama gerektiren her API isteğinin HTTP gövdesini (request body) kendi özel anahtarı ile şifreleyerek imza bilgisini oluşturur.  
- Ardından bu imza verisini, göndereceği mesajın istek başlığında yer alan X-JWS-Signature alanında göndermelidir.  
- X-JWS-Signature alanında gönderilecek olan bilgi aşağıdaki yöntem ile oluşturulmalıdır.  

     1.	Bu alana yazılacak olan bilgi JWT formatında oluşturulmalıdır.
     2.	Bir JWT, header-payload-signature alanlarından oluşmaktadır. 

        - Header alanında JWT’yi imzalamak için kullanılacak algoritma belirtilmelidir.  Standartlar kapsamında RS256 kullanılacaktır.
        - Payload kısmında özel olarak oluşturulacak olan “body” claim alanına istek gövdesi (request body) verisinin SHA256 hash değeri karşılığı yazılmalıdır.
        - JSON payload oluşturulurken RFC 7519 baz alınmalıdır. "iss" (Issuer) Claim, "exp" (Expiration Time) Claim, "iat" (Issued At) Claim, “body” Claim alanlarının gönderilmesi zorunludur.[^RFC7519]  
        a.	"iss" (Issuer) Claim : Kurumunuza özel bilgidir.  
        b.	"exp" (Expiration Time) Claim: Saniye cinsinden (Unix time) imzanın son geçerli olduğu tarih.  
        c.	"iat" (Issued At) Claim : Saniye cinsinden (Unix time) imzanın oluşturulduğu tarih  
        d.	“body” Claim : istek gövdesi (request body) verisinin SHA256 hash değeri karşılığı.  
        - Signature alanında da özel anahtar ile imzalanmış olan imza içeriği yer alacaktır.



        **X-JWS-Signature:**  JWS imzasını içeren üstbilgi. Bu başlığın ne zaman belirtilmesi gerektiği hususu ilgili endpoint için belirtilmiştir.

        **Örnek X-JWS-Signature Payload Değeri**	  


        {  
        "iss": "https://apigw.bkm.com.tr",   
        "exp": 1646832405,  
        "iat": 1646746005,  
        "body": "c543072f97a761a1d891dc81acc380bc1e6f61ca6541bd93ebfdece338457922"  
        }  

- YÖS, isteği gönderir. Sadece mesajın bütünlüğünü ve doğruluğunu teyit amacı ile istek gövdesi (request body) SHA256 hash değeri imzalanarak X-JWS-Signature alanında bu imza iletilir. İsteğin gövde (request body) kısmı açık ve şifresiz olarak gönderilmektedir.
- HHS, isteği alır, talebi gerçekleştirmeden önce aldığı API isteklerinin imzasını doğrulamalıdır. X-JWS-Signature alanındaki JWT aşağıdaki adımlarla doğrulanmalıdır.
    1. 	Header kısmındaki algoritmanin RS256 olduğu kontrol edilir.   
    2. 	Gönderen kurumun açık anahtarı ile JWT verify (doğrulama) işlemi yapılır.
    3. 	Yukarıdaki işlemlerin doğruluğunun ardından JWT’nin payload kısmındaki “body” claim alanındaki bilginin, isteğin gövde verisinin SHA256 hash değerlerinin aynı olduğu kontrol edilir. 

- Yukarıdaki işlemler ile doğruluğu teyit edilmiş olan isteğin talebi gerçekleştirir.
- Eğer istek doğrulanamıyor ise gönderen kurumun açık ve özel anahtar çifti yenilenmiş olabilir.
- BKM HHS API  üzerinden ilgili kurumun bilgilerini (kurum kodu vs) kullanarak kurumun detay bilgileri çeker ve kendi ortamında yeniler.
- Ardından imzayı tekrar açık anahtar ile doğrulayarak kontroller gerçekleştirilir. (Eğer halen doğrulama işlemi başarısız ise bu istek için hata akışı çalıştırılır. **TR.OBHS.Resource.InvalidSignature** kodu ile hata üretilebilir.)
- İmza bilgisinin beklendiği (x-jws-signature) servislerde, bu bilginin iletilmediği durumlarda **TR.OBHS.Resource.MissingSignature** hatası üretilebilir.
- HHS isteği işledikten sonra cevabı oluştururken de yukarıdaki akışlar ile göndereceği cevabı imzalamalıdır.

[^RFC7519]:  https://datatracker.ietf.org/doc/html/rfc7519#section-4 


## EK-6: HHS/YÖS API Mimarisi


HHS/YÖS API Uygulama Mimarisinde Test ve Üretim ortamlarında aşağıdaki alanda yer almaktadır.  

<img src="./images/HhsYosApiMimarisi.png" width="50%" >


Şekil 15: HHS/YÖS API Mimarisi