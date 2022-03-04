# 3. Temel Prensipler <!-- omit in toc -->

Bu bölümde Ödeme Hizmetleri Veri Paylaşım Servisleri (Hesap Bilgisi Hizmeti, Ödeme Emri Başlatma Hizmeti) için tanımlanan temel prensipler açıklanmaktadır.    


- [3.1 Genel](#_3-1-genel)
- [3.2.	İstem ve Oturum](#_3-2-istem-ve-oturum)
- [3.3.	RESTful API](#_3-3-restful-api)
- [3.4.	Sürüm Yönetimi](#_3-4-surum-yonetimi)
- [3.5.	Kaynak URI Yol Yapısı](#_3-5-kaynak-uri-yol-yapısı)
- [3.6.	Karakter Kodlama](#_3-6-karakter-kodlama)
- [3.7.	Veri Formatı](#_3-7-veri-formatı)
- [3.8.	İstemci Sertifika Yönetimi](#_3-8-istemci-sertifika-yonetimi)
- [3.9.	Yetkilendirme Türleri](#_3-9-yetkilendirme-turleri)
- [3.10. İstek/Cevap Mesajlarında Kullanılan Nesne Yapıları](#_3-10-istek-cevap-mesajlarında-kullanılan-nesne-yapıları)
- [3.11. Sayfalandırma ve Filtreleme](#_3-11-sayfalandırma-ve-filtreleme)
- [3.12. Mesaj İmzalama](#_3-12-mesaj-imzalama)
- [3.13. Durum Kodu](#_3-13-durum-kodu)
- [3.14. Gereksinimlerinin Sınıflandırılması](#_3-14-gereksinimlerinin-sınıflandırılması)
- [3.15. İstek Başlığı](#_3-15-istek-baslıgı)
- [3.16. Yanıt Başlığı](#_3-16-yanıt-baslıgı)
- [3.17. Idempotency Kuralları](#_3-17-idempotency-kuralları)
- [3.18. HTTP Durum Kodları](#_3-18-http-durum-kodları)
- [3.19. Maskeleme Kuralları](#_3-19-maskeleme-kuralları)
- [3.20. Fonksiyonel Olmayan Gereksinimler](#_3-20-fonksiyonel-olmayan-gereksinimler)



## 3.1 Genel  

- HHS’ler Yönetmeliğin 59. maddesinin beşinci fıkrası ve Ödeme ve Elektronik Para Kuruluşlarının Bilgi Sistemleri ile Ödeme Hizmeti Sağlayıcılarının Ödeme Hizmetleri Alanındaki Veri Paylaşım Servislerine İlişkin Tebliğin (Tebliğ) 23. maddesinin birinci fıkrası uyarınca, ödeme hizmetleri veri paylaşım servislerini BKM API Geçidi aracılığıyla HBHS ve ÖBHS’ye sunmakla yükümlüdür.  

- Tebliğin 23. maddesinin ikinci fıkrası uyarınca ödeme emri başlatma hizmetinde açık iletişim servisinin tarafları ÖBHS ile HHS’dir.

-	Tebliğin 23. maddesinin üçüncü fıkrası uyarınca hesap bilgisi hizmetinde açık iletişim servisinin tarafları HBHS ile HHS’dir.
-	Yönetmeliğin 60. maddesinin birinci fıkrası uyarınca müşteri, ödeme emri başlatma hizmetini **ödeme hesabının çevrim içi olarak erişilebilir olduğu durumlarda**, kullanmayı tercih edebilir.
-	Yönetmeliğin 61. maddesinin birinci fıkrası uyarınca müşteri, hesap bilgisi hizmetini **ödeme hesabının çevrim içi olarak erişilebilir olduğu durumlarda**, kullanmayı tercih edebilir.
-	Tebliğin 25. maddesi uyarınca HHS ve YÖS (ÖBHS ve HBHS) arasında bağlantı uçtan uca güvenli bir şekilde sağlanır. Bu amaçla iletim katmanında TLS (asgari 1.2 sürümü) ile şifreli iletişim sağlanır.
-	Tebliğin 23. maddesinin dördüncü fıkrası uyarınca HHS tarafından sunulan ödeme hizmetleri veri paylaşım servislerini kullanan yetkilendirilmiş ödeme hizmeti sağlayıcılarının TCMB tarafından ilgili ödeme hizmeti için yetkilendirilmiş olduğu kontrol edilir. 
-	Tebliğin 25. maddesinin beşinci fıkrası uyarınca zaman damgası, 15/1/2004 tarihli 5070 sayılı Elektronik İmza Kanunu kapsamında tanımlanan zaman damgasına dayanır.
-	API alan isimleri Türkçe olarak tanımlanmıştır. Ancak API başlığı (header) alanındaki alan isimleri özelinde, API Geçitleri tarafından otomatik olarak tanınabilmesi gözetilerek, İngilizce isimlendirme tercih edilmiştir.

## 3.2.	İstem ve Oturum  

-	Her istek biricik istek numarası ve ÖHK’lı işlemler için zaman damgası içerir. Birden fazla istek içeren işlem YÖS tarafından belirlenen çağrıya özgü talep kimliği (istek numarası: x-request-id) ve işlem akışına özgü talep kimliği (işlem grup numarası: x-group-id) değerleri kullanılarak HHS tarafından bir oturum yaklaşımı ile sürdürülür (Bknz. 3.15 İstek Başlığı).  

-	Oturum takibi ise işlem grup numarası ile yapılır. İşlem grup numarası da ÖHK’lı işlemler için zaman damgası ile birlikte ilgili tüm işlem verilerini içerecek şekilde kayıt altına alınır.  

-	Örneğin, bir ödeme emri başlatma işlemi birden fazla istekten oluşur. Her istek yukarıda belirtildiği gibi biricik istek numarası ve ÖHK’lı işlemler için zaman damgası içerir. Ancak işlemin oturum bütünlüğü işlem grup numarası ile sağlanır.  

-	Taraflar açtıkları oturumu işlem bütünlüğünü sağlayacak süre içerisinde açık tutar ve işlem biter bitmez kapatır.  


## 3.3.	RESTful API  

API’ler, dünya ölçeğinde yaygın bir şekilde kullanılan Temsili Durum Transferi (Representational State Transfer, REST) mimari tarzı ve JavaScript Nesne Notasyonu (JavaScript Object Notation, JSON) veri formatlarına uygun olarak geliştirilir. En üst seviye Veri Tanımlama Dili (Data Description Language) ve en iyi uygulama örnekleri için [^JSON Şeması] temel alınır.

[^JSON Şeması]:  http://json-schema.org/  


## 3.4.	Sürüm Yönetimi   

API sonraki aşamalarda doğabilecek gereksinimleri ve daha karmaşık kullanım durumlarını karşılamak için sürümler halinde geliştirilir ve bu durum tasarım sırasında göz önünde bulundurulur. 
API v1.0 sürümünde 
-	Vadesiz TL, yabancı para hesapları (gerçek ve tüzel kişilere ait ödeme hesapları), Kredili Mevduat Hesabı 
-	Tekil ödeme (Virman/Havale/FAST/Müşterilerarası TL Aktarım Sistemi)
-	Hesap bilgisi hizmetleri
    -   Temel veya ayrıntılı hesap bilgisi
    -	Bakiye
    -	Gerçekleşen işlemler için Hesap hareketleri
-	Karekodlu ödemelerdeki 01, 02 ve 03 akış türleri
yer almaktadır.  

**Her sürüm değişikliğinde bir önceki sürüm belirli bir süre desteklenecektir. Diğer bir ifadeyle, sadece belirli bir süre için mevcut ve bir önceki sürüm aynı anda erişilebilir olacaktır.**


## 3.5.	Kaynak URI Yol Yapısı

YÖS’lerin başlattığı çağrılarda URI yolu aşağıdaki yapıyı takip eder:

**[hhs-yol-ön-eki]/ohvps/ [kaynak-grubu]/ [sürüm]/ [kaynak]/[kaynak-no]/[alt-kaynak]**

Bu, aşağıdaki unsurlardan oluşur:

- [hhs-yol-ön-eki]  
İsteğe bağlı, HHS'ye özgü yol ön ekini ifade eder.  
BKM API geçidi üzerinden yapılan çağrılarda BKM tarafından belirlenen sistem adı ve yol ön eki kullanılır.  
- ohvps  
Sabit metin “ohvps” (Ödeme Hizmetleri Veri Paylaşım Servisleri kısaltması)  
- [kaynak-grubu]   
Kaynak grubu, API’ye erişmek için kullanılan ödeme hizmetine (HBH, ÖBH) göre erişim adresi (end point) grubunu tanımlar (“hbh” veya “obh”).  
- [sürüm]  
API sürümünü ifade eder (“/s[ana-sürüm].[alt-sürüm]/”).  
- [kaynak]/[kaynak-no]  
Kaynak detaylarını ifade eder.  
- [alt-kaynak]  
Alt kaynak detaylarını ifade eder.  

HHS, tüm kaynakları için aynı katılımcı yolu ön ekini ve sistem adını kullanmalıdır.  

BKM API’lerine erişmek isteyen uygulamaların yetkilerine göre aşağıdaki API’lere abone olmaları gerekmektedir:  

OBH:  
[https://apigw-prod.bkm.com.tr/api/main/ohvps/obh/s1.0/odeme-emri-rizasi]()  
[https://apigw-prod.bkm.com.tr/api/main/ohvps/obh/s1.0/odeme-emri]()  
HBH:  
[https://apigw-prod.bkm.com.tr/api/main/ohvps/hbh/s1.0/hesap-bilgisi-rizasi]()  
[https://apigw-prod.bkm.com.tr/api/main/ohvps/hbh/s1.0/hesaplar]()  
[https://apigw-prod.bkm.com.tr/api/main/ohvps/hbh/s1.0/hesaplar/1234/islemler]()  
[https://apigw-prod.bkm.com.tr/api/main/ohvps/hbh/s1.0/hesaplar/1234/bakiye]()  
GKD  
[https://apigw-prod.bkm.com.tr/api/main/ohvps/gkd/s1.0/erisim-belirteci]()  
HHS – YÖS API  
[https://apigw-prod.bkm.com.tr/api/main/hhs-api/s1.0/hhs]()  
[https://apigw-prod.bkm.com.tr/api/main/hhs-api/s1.0/hhs/1234]()  
[https://apigw-prod.bkm.com.tr/api/main/yos-api/s1.0/yos]()  
[https://apigw-prod.bkm.com.tr/api/main/yos-api/s1.0/yos/1234]()  

  
HHS’lerin sağlayacakları API’lerdeki URI çevrimi örnekleri aşağıdaki gibidir.  

- [https://xbank.com.tr/api-portal/ohvps/obh/s1.0/odeme-emri]() 
- [https://apigw-prod.bkm.com.tr/api/main/ohvps/obh/s1.0/odeme-emri]() (BKM API) 
- [https://xbank.com.tr/api-portal/ohvps/hbh/s1.0/hesap-bilgisi-rizasi]() 
- [https://apigw-prod.bkm.com.tr/api/main/ohvps/hbh/s1.0/hesap-bilgisi-rizasi]() (BKM API) 
- [https://xbank.com.tr/api-portal/ohvps/hbh/s1.1/hesaplar]() 
- [https://apigw-prod.bkm.com.tr/api/main/ohvps/hbh/s1.1/hesaplar]()  (BKM API)  
- [https://xbank.com.tr/api-portal/ohvps/hbh/s1.1/hesaplar/1234]() 
- [https://apigw-prod.bkm.com.tr/api/main/ohvps/hbh/s1.1/hesaplar/1234]() (BKM API)

BKM API Geçidi üzerinden yapılan çağrılarda, istek başlığında bulunan “x-aspsp-code” (isteğin iletildiği Hesap Hizmeti Sağlayıcısının kodu) değerine göre HHS API’de standart olarak tanımlanmış olan “basePath” bilgisine servis uzantısı eklenerek HHS’ye yönlendirme yapılır.

Örneğin, istek başlığında **xbank**’ın kodu varsa, YÖS tarafından yapılan   
[https://apigw-prod.bkm.com.tr/api/main/ohvps/hbh/s1.0/hesap-bilgisi-rizasi]()  
çağrısı BKM API Geçidi tarafından karşılanarak  
[https://xbank.com.tr/api-portal/ohvps/hbh/s1.0/hesap-bilgisi-rizasi]()  
adresine yönlendirilir.   


Bu örnekte, [https://xbank.com.tr/api-portal]() basePath bilgisi HHS tarafından HHS API’ye girilen değerdir.




## 3.6.	Karakter Kodlama  

API istekleri ve yanıtlarında UTF-8 karakter kodlaması kullanılır. Bu, JSON için varsayılan karakter kodlamasıdır.  

Ancak, bir HHS'nin kendi uygulamaları ve ödeme başlattığı ödeme sistemi (FAST vb.)  bazı UTF-8 karakterlerini kabul etmeyebilir. HHS, UTF-8 kodlaması içeren bir mesajı işleyemez ve reddederse, HTTP 400 (Hatalı İstek) durum kodu ile yanıt vermelidir.  


## 3.7.	Veri Formatı

- Açık bankacılık kapsamındaki zaman damgası, ISO 8601 standartına uygun olarak yerel saat bilgisini ve timezone bilgisini de içerecek şekilde " yyyy-MM-dd’T’HH:mm:ssXXX " formattaki haliyle hazırlanmalıdır.   

Örnek:  "timestamp": "2021-05-30T20:34:15+03:00"  
yyyy : 4 hane yıl  
MM : Başa ‘0’ eklenmiş, toplam 2 hane ay  
dd    : Başa ‘0’ eklenmiş, toplam 2 hane gün  
HH    : Başa ‘0’ eklenmiş, toplam 2 hane saat (0-23 arası değer alabilir.)  
mm : Başa ‘0’ eklenmiş, toplam 2 hane dakika  
ss    : Başa ‘0’ eklenmiş, toplam 2 hane saniye  
XXX : ISO 8601 Time zone  

- JWT veri paketlerinde kullanılan zaman damgaları, 1 Ocak 1970 Saat 00:00:00 (UTC) anından itibaren geçen saniye sayısı değerini (Unix Time) kullanır.
- Bir HHS, tarihi yanlış biçimlendirilmiş bir istek aldığında, 400 (Hatalı İstek) durum kodu ve ilgili hata kodu ile yanıt verir.
- Tüm tutar alanları tam sayı olarak, para birimleri ise ISO4217’deki 3 harfli kodla iletilir. Tutar alanı, tutara ilişkin para biriminin ISO4217’de tanımlı olan tam sayıdan sonraki uzunluğuna göre formatlanarak okunmalıdır. Örneğin 1,20 TRY için tutar alanında “120” değeri iletilir, para birimi TRY olduğu için son iki basamağın kuruş olduğu sonucuna ulaşılacaktır. 12000 Japon Yeni için, ISO4217’de JPY para biriminin ondalık kısmı olmadığından tutar alanında 12000 değeri iletilir.
- Sıralı veri tipleri büyük küçük harfe duyarlıdır.
- Altın para birimi ISO4217’ye uygun biçimde “XAU” cinsinde ve virgülden sonra 2 basamak olacak şekilde iletilmelidir. Örneğin içerisinde "13,5 gr" altın olan hesap için bakiye 1350 gönderilmelidir.


## 3.8.	İstemci Sertifika Yönetimi

ÖHVPS kapsamında YÖS ve HHS’lerin güvenli bir şekilde tanımlanması amacıyla elektronik sertifikalar kullanılır.     

ÖHVPS kapsamında tarafların güvenli bir şekilde tanımlaması, uçtan uca güvenli iletişim, mesaj şifreleme ve mesaj imzalama işlevleri 15/1/2004 tarihli ve 5070 sayılı Elektronik İmza Kanunu’nda açıklanan elektronik sertifikalar kullanılarak sağlanır. Elektronik sertifikada Türkiye Cumhuriyet Merkez Bankası tarafından verilen kuruluş kodu ve kuruluşun türüne dair bilgiler bulunur.  

BKM API Geçidi üzerinden yapılan erişimlerde YÖS ve HHS’lere önceden dağıtılmış olan istemci sertifikaları kullanılarak tarafların (sunucu) kimliklerinin doğrulanması sağlanacaktır. İstemci sertifikaları hem test hem de üretim ortamında kullanılacaktır. Sertifikaların işlevselliği ve geçerliliği sertifikasyon sürecinde de sınanacaktır. Söz konusu sertifikaların dağıtım prosedürleri ve kullanımlara yönelik açıklamalar EK-4’te yer verilmiştir.  


## 3.9.	Yetkilendirme Türleri

BKM API Geçidi üzerinden yapılan çağrılarda iki temel yetkilendirme türü kullanılır:

**1.	İstemci Kimlik Bilgileri:** Müşteri onayının gerekmediği, sadece YÖS’ün tanımlanıp doğrulandığı API çağrılarında kullanılır. YÖS’ün yetkilendirilmiş olduğu ve faaliyet izninin yaptığı hizmet çağrısına uygun olduğu kontrol edilir.  Bu amaçla, YÖS’lere clientId ve clientSecret tahsis edilecektir. YÖS’ler ilgili clientId ve clientSecret ile sadece yetkilendirilmiş oldukları servislere erişebileceklerdir. YÖS’ler kendilerine BKM tarafından sunulacak API’yi, kendi clientID ve clientSecret değerleri ile sorgulayarak “İstemci Kimlik Bilgileri” belirtecini (access token) elde edeceklerdir.
HHS’ler de BKM API geçidi üzerindeki YÖS API’sini sorgulama maksadı ile BKM API Geçidine geldiklerinde, kendilerine atanmış olan clientID ve clientSecret bilgileri ile yetki kontrolleri yapılır.
HHS’ler kendilerinden alınacak username ve password değerleri kullanılarak oluşturulacak basic authentication metodu ile servislerini sunacaklardır.  

**2.	Yetkilendirme Kodu:** YÖS’ün doğrulanmasının yanısıra müşterinin GKD ile doğrulanması gereken API çağrılarında kullanılır. Müşteri doğrulanarak yetkilendirme kodu oluşturulması HHS’nin yetkilendirme arayüzüne yönlendirilir. GKD’nin başarıyla tamamlanması sonrasında yetkilendirme kodu YÖS’e dönülür. YÖS daha sonra HHS’nin **erişim belirteci** (access token) erişim adresini (EK-3: POST /erisim-belirteci) çağırmak suretiyle yetkilendirme kodunu bir erişim belirteci (access token) ile değiştirerek ilgili kaynakları kullanabilir.

Ödeme emri başlatma ve hesap bilgisi hizmetlerinde hangi yetkilendirme türlerinin kullanılacağı bilgisi, ilgili başlıklardaki erişim adresleri (endpoints) tablolarında yer almaktadır.  

**erisim-belirteci** erisim noktasından elde edilen **erisimBelirteci** ilişkilendirildiği nesne veya işlem için gönderilen POST isteği başlığında **x-access-token** alanında iletilir.
Belirli bir süre için tanımlanan erişim belirteci (access token) değerinin yenileme belirteci (refresh token) ile yenilenmesi gerekir.   

Erişim adreslerinde kullanılan yetkilendirme türü ilgili erişim adresi tablolarında belirtilmiştir.

## 3.10. İstek/Cevap Mesajlarında Kullanılan Nesne Yapıları

İstek ve Cevap mesajlarında kullanılacak olan nesneler tüm elemanlarını kapsayacak şekilde Ek-1 de listelenmiştir. Tüm listelenen elemanlar açısından (Uç nokta mesaj yapılarının belirtildiği tablolarda belirtildiği üzere) alanın Zorunlu (z) veya İsteğe Bağlı (İ) olma durumlarına göre bazı alanlar gönderilebilir veya gönderilmeyebilir. 

## 3.11. Sayfalandırma ve Filtreleme

**Sayfalandırma**  

Çağrıya dönülen kaynak nesnesi içerisindeki kayıtlar bir sayfalandırma yapısı ile çağrılacak şekilde istek oluşturulur.

Oluşturulacak isteğin içerisinde parametreler ile filtreleme, sayfa başına gösterilecek kayıt sayısı ve hangi sayfanın önyüzde gösterileceği bilgileri erişim noktasına iletilir ve ilgili kayıtlar cevap olarak alınır.

**Filtreleme**

HHS, birden çok kayıt dönülmesi gereken GET çağrılarında sınırlı filtreleme desteği sağlamalıdır. Filtre parametreleri her zaman kaynak nesnesinin belirli alanlarına özgüdür ve nesne için tanımlanan kurallara uymalıdır. 


## 3.12. Mesaj İmzalama

Elektronik imzalar, ÖHVPS API’de gerçekleştirilen işlemlerin ve taşınan verilerin bütünlük ve inkâr edilemezliğini destekler. İmzaların kaynak bazında hangi istek ve yanıtlara uygulandığı belirlidir. 

API yalnızca TLS'ye dayanırsa, dijital kayıtları ve inkâr edilemezlik kanıtlarını tutmak zor olur. Bu nedenle, TLS'ye dayanmayan bir inkâr edilemezlik çözümü olarak API isteğinin HTTP başlığında bir JWS kullanılarak sağlanabilir.

HTTP isteğinin gövdesinin hash fonksiyonu (SHA256) ile özeti alınacaktır. Elde edilen özet, asimetrik anahtarları destekleyen bir algoritma kullanılarak imzalanacak ve JWS elde edilecektir.

Bir istek, YÖS'nin özel anahtarı ile imzalanacak ve bu isteğe karşılık gelen yanıt, HHS'nin özel anahtarı tarafından imzalanacaktır.

Tüm API istekleri ve yanıtları imzalanmaz. Mesaj imzalamanın zorunlu olup olmadığı, desteklenip desteklenmediği her API özelinde belirlenir.

**Anahtar Deposu**

HHS'ler ve YÖS'ler tarafından güvenilen bir Güven Otoritesi (Trust Anchor), taraflar için bir genel anahtar deposu sağlamaktan sorumludur.

Güven Otoritesi, taraflardan herhangi birisinin oluşturduğu bir anahtar çiftinin açık bölümünü saklayan merkezi bir dizin (BKM tarafından tutulan merkezi kayıt sistemi vb.) olacaktır.

Mesajları doğrulamak için tarafların genel anahtarlarının paylaşılması için BKM bir servis sağlayacaktır. HHS API olarak adlandırılımış olan bu servis ile HHS ve YÖS listelerine ulaşılabildiği gibi doğrulama işlemi için ihtiyaç duyulacak olan genel anahtarlara da bu servis üzerinden erişilebilinecektir. 

İlgili Mesaj şifreleme için genel akış, Ek-5 bölümünde detaylarıyla paylaşılmaktadır.

## 3.13. Durum Kodu

API’ler, iki farklı amaca hizmet eden iki durum kodu kullanır:

- HTTP Durum Kodu, API çağrısının (kaynaktaki HTTP işlemi) sonucunu yansıtır.
- Bazı kaynak payload’larındaki Durum alanı, kaynakların durumunu yansıtır.


## 3.14. Gereksinimlerinin Sınıflandırılması

Erişim adreslerinin ve alanların kullanımı Zorunlu(Z), İsteğe Bağlı(İ) veya Koşullu(K) olabilir. Kullanımlara ilişkin durumlar ve kullanımın (K) koşullu olduğu duruma ilişkin açıklamalar ilgili tablolarda belirtilmiştir.

İstek ve yanıtta kullanılacak başlık isimleri, ilgili RFC dokümanlarında ve aşağıdaki tabloda yer aldığı şekilde kullanılacaktır.  Uygulamaya özelleşmiş başlıklar "X-" ile başlayacaktır. Başlık isimlerinde yer alacak kısaltmalar (örn. PSU, ASPSP gibi) tamamı büyük harfle yazılacak şekilde tanımlanacaktır. Başlık isimleri büyük – küçük harfe duyarlı olmamalıdır. Örneğin x-request-id ya da X-Request-ID olarak gönderilmiş olan bir istek başlığı değişkeni, sunucu tarafında hata vermeyecek şekilde işlenebilmelidir.


## 3.15. İstek Başlığı

**Tablo 2: İstek Başlığında Yer Alan Veriler**  
|Başlık İsimleri |Format |Notlar |POST |GET |DELETE |
| --- | --- | --- | --- | --- | --- |
| X-Request-ID  | AN1..36 | İsteği başlatan YÖS tarafından belirlenen çağrıya özgü talep kimliği. İstek numarası. <br> Örnek: Ödeme emri başlatma iş akışının her adımda farklı “x-request-id” değeri kullanılır. <br> Çağrıların aynı yanıtı dönmesinin beklendiği durumlarda (idempotent işlemlerde) aynı değer ile çağrı yapılır.   | Z |Z |Z  |
| X-Group-ID |AN1..36 |	İsteği başlatan YÖS tarafından belirlenen işlem akışına özgü talep kimliği. İşlem grup numarası.<br> Aynı rıza no’ya ait tüm isteklerde aynı x-group-id bilgisi değeri gönderilmelidir.<br>Örnek: Ödeme emri başlatma/hesap bilgisi iş akışının her adımında aynı “x-group-id” değeri kullanılır.|	Z|	Z|	Z|
|Content-Type | AN1..20| Standart HTTP Başlığı; Talepte sağlanan payload’ın biçimini temsil eder: application/json<br> (Başka bir değere ayarlanırsa, HHS, 415 Desteklenmeyen Ortam Türü (Unsupported Media Type) ile yanıt vermelidir)|İ|-|-|
| X-ASPSP-Code |AN4| İsteğin iletildiği Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)|Z |Z|Z| 
|X-TPP-Code|AN4|İsteği gönderen Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur	|Z|Z|Z|
|PSU-Auth-Date|ISODateTime|ÖHK’nın YÖS üzerinde en son oturum açtığı saat. [RFC7231] Örneğin:  auth-date: Tue, 11 Sep 2012 19:43:31 GMT	|İ|İ|İ|
|PSU-IP-Adress|AN7..15|ÖHK YÖS üzerinde oturum açmışsa, işlemi başlattığı cihazın IP adresi.|İ|İ|İ|
|PSU-IP-Port|AN1..5|ÖHK YÖS üzerinde oturum açmışsa, işlemi başlattığı cihazın Port adresi.	|İ|İ|İ|
|PSU-GEO-Location|AN1..36|ÖHK’nın işlemi başlattığı cihazın konum bilgisi. RFC2426 standartına uygun olarak paylaşılmalıdır. Örneğin GEO:"<enlem>,< boylam > GEO:52.506931,13.144558|İ|İ|İ|
|PSU-User-Agent|AN 1.. 255|ÖHK’nın işlemi başlattığı cihazın sağladığı user-agent bilgisi. (Tarayıcı, versiyon, işletim sistemi bilgileri)|İ|İ|İ|
|PSU-Timestamp|ISODateTime|	ÖHK’nın işlemi başlattığı cihazın tarih saat içeren zaman bilgisi.|İ|İ|İ|
|PSU-Device-ID|AN5..40|ÖHK işlemi mobil uygulama aracılığıyla başlattıysa, kullanılan mobil uygulama ilk yüklendiğinde oluşturulan tekil cihaz veya uygulama belirteci. ÖHK cihazının UUID değeri kullanılabilir.|İ|İ|İ|
|PSU-Device-Data|AN1..1024|ÖHK’nın işlemi başlattığı mobil cihaza ait veriler. <br>Örnek alanlar: <br> - Platform - (Android, iOS, Windows 10 Mobile)<br> - Device Model <br> - OS Name <br> - OS Version<br>- Locale<br>- Time zone|İ|İ|İ|
|PSU-Initiated|AN1|İşlemler servisinde yapılacak sistemsel sorgulardaki işlem limitlerini kontrol amacıyla kullanılır.
İşlemin ÖHK tarafından başlatılması durumunda E , sistem tarafından başlatıldığı durumda H değerini alması beklenir.|Z|Z|Z|
|Authorization|AN1..4096|YÖS ile BKM API Gateway arasındaki otorizasyon için kullanılan token bilgisidir. |Z  |Z |Z  |
| X-Access-Token |AN1..4096|ÖHK’nın GKD sürecinde doğrulanması sonrasında kullanılan erişim simgesi|İ|İ|İ|
|X-JWS-Signature|AN1..4096|Payload gövdesinin ayrılmış bir JWS imzasını içeren üstbilgi.<br> Bu başlığın ne zaman belirtilmesi gerektiği hususu ilgili endpoint için belirtilmiştir.|K (Kullanılan API ve metoda göre kullanılır.) |K  |K |K|
					
## 3.16. Yanıt Başlığı

## 3.17. Idempotency Kuralları

## 3.18. HTTP Durum Kodları

## 3.19. Maskeleme Kuralları

## 3.20. Fonksiyonel Olmayan Gereksinimler



