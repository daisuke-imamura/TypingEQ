from flask import Blueprint, jsonify
from model import app
import random

app.config["JSON_AS_ASCII"] = False

terminologie_module = Blueprint("terminologie_module", __name__)
terminologie_module2 = Blueprint("terminologie_module2", __name__)
create_module = Blueprint("create_module", __name__, template_folder="templates")
update_module = Blueprint("update_module", __name__, template_folder="templates")
delete_module = Blueprint("delete_module", __name__)

# 用語全てからランダムで問題をJSONで取得
@terminologie_module2.route("/terminologie2", methods=["GET"])
def terms():
    data = [
        {
            "terminologie_id": 1,
            "genre_id": 1,
            "theme_jp": "WEB三層とは",
            "theme_ro": "WEBsansoutoha",
            "description_ja": "クライアントからの処理をするサーバーが、プレゼンテーション層、アプリケーション層、データベース層の3層から構成されているため、Web3層構造と呼びます。",
            "description_ro": "kuraiantokaranosyoriwosurusa-baga,purezente-syonsou,apurike-syonsou,de-tabe-susouno3soukarakouseisareteirutame,Web3soukouzoutoyobimasu."
        },
        # {
        #     "terminologie_id": 2,
        #     "genre_id": 1,
        #     "theme_jp": "静的ページとは",
        #     "theme_ro": "seitekipe-jitoha",
        #     "description_ja": "静的ページとは、いつどこでアクセスしても毎回同じものが表示される、HTMLファイルで作成されたwebページのことです。ユーザーの要求に対して、webサーバーが要求されたデータをそのままブラウザに送信し、表示します。静的ページは、そのwebページの制作者が更新をしない限り内容は一切変化しません。静的ページは企業の紹介サイトなど、ユーザーの入力内容や環境によって表示に差が出てしまうと困る内容を掲載するのに適しています。",
        #     "description_ro": "seitekipe-jitoha,itudokodeakusesusitemomaikaionajimonogahyoujisareru,HTMLfairudesakuseisaretawebpe-jinokotodesu.yu-za-noyoukyuunitaisite,websa-ba-gayoukyuusaretade-tawosonomamaburauzanikousinnsi,hyoujisimasu.seitekipe-jiha,sonowebpe-jinoseisakusyagasousinwosinaikagirinaiyouhaissaihenkasimasenn.seitekipe-jihakigyounosyoukaisaitonado,yu-za-nonyuuryokunaiyouyakankyouniyottehyoujinisagadetesimautokomarunaiyouwokeisaisurunonitekisiteimasu."
        # },
        # {
        #     "terminologie_id": 3,
        #     "genre_id": 1,
        #     "theme_jp": "動的ページとは",
        #     "theme_ro": "doutekipe-jitoha",
        #     "description_ja": "動的ページとは、アクセスしたときの状況に応じて異なる内容が表示されるwebページのことです。ユーザーが書き込むことで内容が増える掲示板サイトやブログ、表示内容がユーザーごとに違うショッピングサイトや会員制サイトなどが動的ページです。例えば、検索エンジンでは、ユーザーの検索ワードをもとにwebサーバーが検索処理を実行し、HTMLファイルを作成します。その後、webブラウザに送信することで、ユーザーの入力した検索ワードに対して最新の検索結果の情報を提供することができます。",
        #     "description_ro": "doutekipe-jitoha,akusesusitatokinojoukyounioujitekotonarunaiyougahyoujisareruwebpe-jinokotodesu.yu-za-gakakikomukotodenaiyougahuerukeijibansaitoyaburogu,hyoujinaiyougayu-za-gotonitigausyoppinngusaitoyakaiinnseisaitonadogadoutekipe-jidesu.tatoeba,kennsakuenjindeha,yu-za-nokensakuwa-dowomotoniWebsa-ba-gakensakusyoriwojikkousi,HTMLfairuwosakuseisimasu.sonoato,Webburauzanisousinsurukotode,yu-za-nonyuuryokusitakensakuwa-donitaisitesaisinnnokensakukekkanojouhouwoteikyousurukotogadekimasu."
        # },
        {
            "terminologie_id": 4,
            "genre_id": 1,
            "theme_jp": "Nginxとは",
            "theme_ro": "Nginxtoha",
            "description_ja": "nginxは静的コンテンツ[つまりサーバ上のファイル]を高速に配信するように設計されている。また、リバースプロキシの機能を持つため、背後にWebアプリケーションサーバを配置して動的なコンテンツを配信したり、ソフトウェアロードバランサやHTTPキャッシュとしても使うこともできる。各種のウェブアプリケーション用インターフェースも標準でサポートしている。",
            "description_ro": "nginxhaseitekikontentu[tumarisa-bajounofairu]wokousokunihaisinsuruyounisekkeisareteiru.mata,riba-supurokisinokinouwomotutame,haigoniWebapurike-syonsa-bawohaitisitedoutekinakontentuwohaisinsitari,sohutowearo-dobaransayaHTTPkyassyutositetukaukotomodekiru.kakusyunowebuapurike-syonyouinta-fe-sumohyoujundesapo-tositeiru."
        },
        # {
        #     "terminologie_id": 5,
        #     "genre_id": 2,
        #     "theme_jp": "Linuxとは",
        #     "theme_ro": "Linuxtoha",
        #     "description_ja": "Linuxとは、WindowsやMacOSと同じOSの一種です。OSとは[オペレーティングシステム]の略語で、ソフトウェア[アプリなど]とハードウェア[データなどの記録、保管装置]をつなぐ役割を担っています。Windows10やMacOSと異なる特徴として、Linuxは[無料で使えるオープンソース]。オープンソースとは、その名のとおり世界中に公開されている無料のソースコードを指します。したがって、Linuxをベースとした開発、改良を誰でも簡単に行えるのが特徴です。改良や開発だけでなく、再配布も可能。そのため国内外の有志が自由にカスタマイズを行い、新たなLinuxを再配布しています。",
        #     "description_ro": "Linuxtoha,WindousyaMacOStoonajiOSnoissyudesu.OStoha[opere-thingusisutemu]noryakugode,sohutowea[apurinado]toha-dowea[de-tanadonokiroku,hokansouti]wotunaguyakuwariwoninatteimasu.Windows10yaMacOStokotonarutokutyoutosite,Linuxha[muryoudetukaeruo-punso-su].o-punso-sutoha,sononanotoorisekaijudnikoukaisareteirumuryounoso-suko-dowosasimasu.sitagatte,Linuxwobe-sutositakaihatu,kairyouwodaredemokantannniokonaerunogatokutyoudesu.kairyouyakaihatudakedenaku,saihaihumokanou.sonotamekokunaigainoyuusigajiyuunikasutamaizuwookonai,aratanaLinuxwosaihaihusiteimasu."
        # },
        # {
        #     "terminologie_id": 6,
        #     "genre_id": 2,
        #     "theme_jp": "メモリとは",
        #     "theme_ro": "memoritoha",
        #     "description_ja": "メモリは作業デスクの役割をするパーツで、性能は容量で表されます。メモリはソフトウェアを一つ立ち上げるごとに消費します。そのため、スペック上で定められた限度であるメモリ容量以上の数のソフトを一度に使うことはできません。メモリ容量が少ないパソコンは狭いデスクで作業するようなもので、複数のソフトを使った作業で処理が遅くなってしまいます。メモリ容量が大きければ広いデスクで作業するようなもので、処理速度が速い状態で効率的に作業が行えます。",
        #     "description_ro": "memorihasagyoudesukunoyakuwariwosurupa-tude,seinouhayouryoudearawasaremasu.memorihasohutoweawohitotutatiagerugotonisyouhisimasu.sonotame,supekkujoudesadameraretagendodearumemoriyouryouijounikazunosohutowoitidonitukaukotohadekimasenn.memoriyouryougasukunaipasokonhasemaidesukudesagyousuruyounamonode,hukusuunosohutowotukattasagyoudesyorigaosokunattesimaimasu.memoriyouryougaookikerebahiroidesukudesagyousuruyounamonode,syorisokudogahayaijoutaidekouritutekinisagyougaokonaemasu."
        # },
        {
            "terminologie_id": 7,
            "genre_id": 2,
            "theme_jp": "環境変数とは",
            "theme_ro": "kankyouhensuutoha",
            "description_ja": "アプリケーションやバッチファイルなどが参照する文字列が保存された変数のこと。OSの起動時にメモリー領域に読み込まれるので、アプリケーションはこれを参照する。主に作業用のディレクトリやアプリケーションに参照させたいディレクトリなどを記述しておく。",
            "description_ro": "apurike-syonyabattifairunadogasansyousurumojiretugahozonsaretahensuunokoto.OSnokidoujinimemori-ryouikiniyomikomarerunode,apurike-syonhakorewosansyousuru.omonisagyouyoudhirekutoriyaapurike-syonnnisansyousasetaidhirekutorinadowokijutusiteoku."
        },
        # {
        #     "terminologie_id": 8,
        #     "genre_id": 3,
        #     "theme_jp": "プロトコルとは",
        #     "theme_ro": "purotokorutoha",
        #     "description_ja": "コンピューター同士が通信をする際の手順や規約などの約束事。ネットワークでコンピューターが使う言語のようなもので、双方が理解できる同じプロトコルを使わないと通信は成立しない。そのため、インターネットのプロトコルの多くはRFC[RequestforComments]という形式で技術仕様が公開されており、誰でも閲覧できる。それぞれのコンピューターは、プロトコルで定められた処理をするプログラム[プロトコルスタック]をコンピューターに組み込むことによってネットワークに接続し、ほかのコンピューターと通信する。たとえば、インターネットへの接続にはTCP/IPプロトコルが用いられる。また、Webページを閲覧するためには、WebブラウザーとWebサーバーとがやり取りするためのHTTPというプロトコルが使われている。",
        #     "description_ro": "konpyu-ta-dousigatuusinwosruusainotejunyakisokunadonoyakusokugoto.nettowa-kudekonpyu-ta-gautkaugengonoyounamonode,souhougaeikaidekiruonajipurotokorouwotukawanaitotuusinhaseiritusinai.sonotame,inta-nettonopurotokorunoookuhaRFC[RequestforComments]toiukeisikidegijutusiyougakoukaisareteori,daredemoeturandekiru.sorezorenokonpyu-ta-ha,purotokorudesadameraretasyoriwosurupuroguramu[purotokorusutakku]wokonpyu-ta-totuusinsuru.tatoeba,inta-nettohenosetuzokunihaTCP/IPpurotokorugamotiirareru.mata,Webpe-jiwoeturansurutameniha,Webburauza-toWebsa-ba-togayaritorisurutamenoHTTPtoiupurotokorugamotiirareteiru."
        # },
        # {
        #     "terminologie_id": 9,
        #     "genre_id": 3,
        #     "theme_jp": "OSI参照モデルとは",
        #     "theme_ro": "OSIsansyoumoderutoha",
        #     "description_ja": "OSI[OpenSystemsInterconnection]参照モデルとは、国際標準化機構[ISO]により策定されたコンピュータなどの通信機器の通信機能を、階層構造に分割したモデルです。このOSI参照モデルでは通信プロトコルを7つの階層に分けて、それぞれの階層で行われる通信機能を定義しています。また、OSI参照モデルにより、ネットワーク全体でどのようにデータが伝送されていくのか、ネットワークの仕組みを分かりやすく理解できるように促進している側面もあります。ネットワークエンジニアが設計、構築、障害対応などでプロトコルに関して議論する場合は、OSI参照モデルに基づき話をすることが一般的です。",
        #     "description_ro": "OSI[OpenSystemInterconnection]sansyoumoderutoha,kokusaihyoujunkakikou[ISO]niyotisakuteisaretakonpyu-tanadonotuusinkikinotusinkinouwo,kaisoukouzounibunkatusitamoderudesu.konoOSIsansyoumoderudehatuusinpurotokoruwo7tunokaisouniwakete,sorezorenokaisoudeokonawarerutuusinkinouwoteigisiteimasu.mata,OSIsansyoumoderuniyori,nettowa-kuzentaidedonoyounide-tagadensousareteikunoka,nettowa-kunosikummiwowakariyasukurikaidekiruyounisokusinsiteirusokumenmoarimasu.nettowa-kuenjiniagasekkei,koutiku,syougaitaiounadodepurotokorunikansitegironsruubaaiha,OSIsansyoumoderunimotodukihanasiwosurukotogaippantekidesu."
        # },
        {
            "terminologie_id": 10,
            "genre_id": 3,
            "theme_jp": "DNSとは",
            "theme_ro": "DNStoha",
            "description_ja": "DNSとは、インターネットなどのIPネットワーク上でドメイン名[ホスト名]とIPアドレスの対応関係を管理するシステム。利用者が単なる番号列であるIPアドレスではなく、日常使っている言語の文字を組み合わせた認識しやすいドメイン名でネットワーク上の資源にアクセスできるようにする。",
            "description_ro": "DNStoha,inta-nettonadonoIPnettowa-kujoudedomeinmei[hosutomei]toIPadoresunotaioukankeiwokanrisurusisutemu.tiyousyagatannnarubangouretudearuIPadoresudehanaku,nitijoutukatteirugengonomojiwokumiawasetaninsikisiyasuidomeinmeidenettowa-kujounosigennniakusesudekiruyounisuru."
        },
    ]
    return(random.choice(data))
        

