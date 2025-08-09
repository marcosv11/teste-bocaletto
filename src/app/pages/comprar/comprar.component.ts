import { Component, OnInit } from "@angular/core";
import { CardCompraComponent } from "./card-compra/card-compra.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-comprar",
  standalone: true,
  imports: [CardCompraComponent, CommonModule, FormsModule],
  templateUrl: "./comprar.component.html",
  styleUrl: "./comprar.component.css",
})
export class ComprarComponent implements OnInit {
  categoriaSelecionada: "toners" | "cartuchos" | "fotocondutores" = "toners";
  filtro: string = "";

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  produtos = [
    {
      id: 1,
      nome: "TONER HP CB540/41/42/43",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/C/E/CE310A-1_T1680778090.png",
      compatibilidade: [
        "Laserjet CP1215",
        "Laserjet CP1515",
        "Laserjet CP1518",
        "Laserjet CM1312",
      ],
      descricao:
        "Toner HP 125A colorido ideal para impressões com cores vibrantes e qualidade profissional.",
    },
    {
      id: 2,
      nome: "TONER HP CE310/11/12/13A",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/C/E/CE310A-1_T1680778090.png",
      compatibilidade: [
        "LaserJet HP CP1025",
        "LaserJet HP CP1025NW",
        "LaserJet HP CP1020",
        "LaserJet HP CP1020NW",
        "LaserJet HP M175A",
        "LaserJet HP M175NW",
      ],
      descricao:
        "Toner HP 126A colorido com qualidade de imagem superior, ideal para documentos e gráficos detalhados.",
    },
    {
      id: 3,
      nome: "CARTUCHO DE CILINDRO HP CE314A",
      imagem:
        "https://www.acessoshop.com.br/image/cache//catalog/product/CE314A-700x700.jpg?mode=contain",
      compatibilidade: ["HP CP1025", "HP CP1025nw"],
      descricao:
        "Cilindro de imagem HP CE314A essencial para o funcionamento eficiente das impressoras HP CP1025.",
    },
    {
      id: 4,
      nome: "TONER HP W1105A 105A PRETO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/h/p/hp_105a_black_toner_cartridge_w1105ab_w1105-00003_brazil_1.png",
      compatibilidade: [
        "HP LaserJet 107a",
        "HP LaserJet 107W",
        "HP LaserJet MFP-M135a",
        "HP LaserJet MFP-M135W",
      ],
      descricao:
        "Toner preto HP 105A com alto rendimento para impressões nítidas e profissionais em preto e branco.",
    },
    {
      id: 5,
      nome: "TONER HP W1330XC PRETO 330X",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_681958-MLB53072369493_122022-O-toner-original-hp-m432fdn-m432-m408-w1330x-w1330x-nfe.webp",
      compatibilidade: [
        "Multifuncional HP Laserjet M432FDN",
        "Multifuncional HP Laserjet M408DN",
      ],
      descricao:
        "Toner HP 330X de alta capacidade, ideal para ambientes corporativos com grande volume de impressão.",
    },
    {
      id: 6,
      nome: "TONER HP CE255X",
      imagem:
        "https://cdn.awsli.com.br/2500x2500/109/109824/produto/3493855/a558204ae7.jpg",
      compatibilidade: [
        "HP P3015",
        "HP P3015N",
        "HP P3015D",
        "HP P3015DN",
        "HP P3015X",
        "HP Enterprise M525F",
        "HP Enterprise M521DN",
      ],
      descricao:
        "Toner HP CE255X de alto rendimento ideal para impressoras de médio a grande porte. Ótima performance e nitidez.",
    },
    {
      id: 7,
      nome: "TONER HP CE278A",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/C/E/CE278AB-1_T1680778075.png",
      compatibilidade: [
        "HP Laserjet P1566",
        "HP Laserjet P1606",
        "HP Laserjet P1606N",
        "HP Laserjet P1606DN",
        "HP Laserjet M1536",
        "HP Laserjet M1536DNF",
      ],
      descricao:
        "Toner HP CE278A ideal para impressões diárias com textos nítidos e gráficos definidos.",
    },
    {
      id: 8,
      nome: "TONER HP CE285A/ 85A PRETO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/5/7/5750abc3da2c7b4214fbfece.png",
      compatibilidade: [
        "HP LaserJet P1102",
        "HP LaserJet P1102W",
        "HP LaserJet M1132",
        "HP LaserJet M1210",
        "HP LaserJet M1212",
        "HP LaserJet M1130",
        "HP LaserJet M1217",
        "HP LaserJet M1217FW",
      ],
      descricao:
        "Toner preto HP 85A para impressões de alta qualidade e ótimo rendimento em uso doméstico e corporativo.",
    },
    {
      id: 9,
      nome: "TONER HP CE505A / 505A PRETO",
      imagem:
        "https://m.media-amazon.com/images/I/71Fsn57MiyL.__AC_SX300_SY300_QL70_ML2_.jpg",
      compatibilidade: [
        "Impressora HP LaserJet P2035",
        "Impressora HP LaserJet P2055",
      ],
      descricao:
        "Cartucho de toner HP CE505A ideal para impressoras rápidas com excelente custo-benefício e durabilidade.",
    },
    {
      id: 10,
      nome: "TONER HP CF226X",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/27440/toner_hp_26x_original_cf226x_black_m402dn_m402_m426_10230_1_20191128132158.jpg",
      compatibilidade: [
        "HP Laserjet Pro M426FDW",
        "HP Laserjet Pro M426DW",
        "HP Laserjet Pro M426FDN",
        "HP Laserjet Pro M402DNE",
        "HP Laserjet Pro M402DN",
        "HP Laserjet Pro M402N",
        "HP Laserjet Pro M402D",
      ],
      descricao:
        "Toner HP CF226X de alto rendimento para impressoras profissionais com desempenho consistente e eficiente.",
    },
    {
      id: 11,
      nome: "TONER HP Q2612A",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/Q/2/Q2612AB-1_T1680779606.png",
      compatibilidade: [
        "HP LaserJet 1012",
        "HP LaserJet 1015",
        "HP LaserJet 1018",
        "HP LaserJet 1020",
        "HP LaserJet 1022",
        "HP LaserJet 1022n",
        "HP LaserJet 1022nw",
        "HP LaserJet 3015",
        "HP LaserJet 3030",
        "HP LaserJet 3050",
        "HP LaserJet 3052",
        "HP LaserJet 3055",
        "HP 1319 Fax",
        "HP M1319",
        "HP M1005",
        "HP M1005MFP",
      ],
      descricao:
        "Cartucho de toner HP 12A preto para impressoras LaserJet. Proporciona impressões nítidas com excelente rendimento.",
    },
    {
      id: 12,
      nome: "TONER SAMSUNG MLT-D101S",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/S/U/SU700A-1_T1682541589.png",
      compatibilidade: [
        "Samsung ML2165",
        "Samsung ML2165W",
        "Samsung SCX3405W",
        "Samsung SCX3405FW",
      ],
      descricao:
        "Toner preto Samsung MLT-D101S com ótimo custo-benefício e alta qualidade de impressão.",
    },
    {
      id: 13,
      nome: "CILINDRO BROTHER DRB021",
      imagem:
        "https://www.brother.com.br/-/media/brother/product-catalog-media/images/2021/04/12/07/26/drb021_0.png",
      compatibilidade: [
        "Brother DCP-7520DW",
        "Brother DCP-7535DW",
        "Brother DCP-B7650DW",
        "Brother HL-B2080DW",
      ],
      descricao:
        "Cilindro Brother DR-B021 para impressoras e multifuncionais da linha B, garantindo imagens nítidas e durabilidade.",
    },
    {
      id: 14,
      nome: "CILINDRO BROTHER DR1060",
      imagem:
        "https://www.brother.com.br/-/media/brother/product-catalog-media/images/2021/03/18/08/12/dr-1060.png",
      compatibilidade: [
        "Brother HL1112",
        "Brother HL1202",
        "Brother DCP1602",
        "Brother DCP1512",
        "Brother HL1212W",
        "Brother DCP1612NW",
        "Brother DCP1610",
      ],
      descricao:
        "Unidade fotocondutora Brother DR1060 usada com o toner TN1060. Essencial para alta performance de impressão.",
    },
    {
      id: 15,
      nome: "CILINDRO BROTHER DR2340",
      imagem:
        "https://www.brother.com.br/-/media/brother/product-catalog-media/images/2022/02/01/10/40/dr2340.png",
      compatibilidade: [
        "Brother HL-L2320D",
        "Brother HL-L2360DW",
        "Brother MFC-L2740DW",
        "Brother MFC-L2720DW",
        "Brother MFC-L2700DW",
        "Brother DCP-L2520DW",
        "Brother DCP-L2540DW",
      ],
      descricao:
        "Cilindro DR-2340 para multifuncionais e impressoras Brother. Alta confiabilidade para grandes volumes.",
    },
    {
      id: 16,
      nome: "CILINDRO BROTHER DR3440",
      imagem:
        "https://www.brother.com.br/-/media/brother/product-catalog-media/images/2021/03/18/08/15/dr3440_front_featuredimagery_0.png",
      compatibilidade: [
        "Brother HL-L6202DW",
        "Brother HL-L5102DW",
        "Brother HL-L5202DW",
        "Brother HL-L6402DW",
        "Brother DCP-L5652DN",
        "Brother DCP-L5502DN",
        "Brother DCP-L5602DN",
        "Brother MFC-L5702DW",
        "Brother MFC-L5902DW",
        "Brother MFC-L6702DW",
        "Brother MFC-L5802DW",
        "Brother MFC-L6902DW",
      ],
      descricao:
        "Unidade de imagem DR3440 para uso em impressoras Brother profissionais. Alto rendimento e precisão.",
    },
    {
      id: 17,
      nome: "TONER BROTHER TNB021",
      imagem:
        "https://www.brother.com.br/-/media/brother/product-catalog-media/images/2021/04/12/07/26/tnb021_0.png",
      compatibilidade: [
        "Brother DCP-7520DW",
        "Brother DCP-7535DW",
        "Brother DCP-B7650DW",
        "Brother HL-B2080DW",
      ],
      descricao:
        "Cartucho de toner Brother TN-B021 preto com ótima performance em equipamentos da linha B.",
    },
    {
      id: 18,
      nome: "TONER BROTHER TN1060",
      imagem:
        "https://www.brother.com.br/-/media/brother/product-catalog-media/images/2021/03/23/08/47/tn-1060_2.png",
      compatibilidade: [
        "Brother HL1112",
        "Brother HL1202",
        "Brother HL1212W",
        "Brother DCP1602",
        "Brother DCP1512",
        "Brother DCP1617NW",
      ],
      descricao:
        "Toner preto Brother TN1060 com rendimento econômico e impressões com nitidez profissional.",
    },
    {
      id: 19,
      nome: "TONER BROTHER TN2370",
      imagem:
        "https://www.brother.com.br/-/media/brother/product-catalog-media/images/2022/02/01/10/59/tn2370.png",
      compatibilidade: [
        "HL-L2360DW",
        "HL-L2320D",
        "MFC-L2720DW",
        "MFC-L2740DW",
        "MFC-L2700DW",
        "DCP-L2520DW",
        "DCP-L2540DW",
      ],
      descricao:
        "Cartucho de toner Brother TN2370 ideal para impressões de alto volume com qualidade e durabilidade.",
    },
    {
      id: 20,
      nome: "TONER BROTHER TN3472",
      imagem:
        "https://www.brother.com.br/-/media/brother/product-catalog-media/images/2021/03/23/09/04/tn3472_front.png",
      compatibilidade: [
        "HL-L5102DW",
        "HL-L6402DW",
        "HL-L6202DW",
        "HL-L5202DW",
        "DCP-L5602DN",
        "DCP-L5652DN",
        "DCP-L5502DN",
        "MFC-L5802DW",
        "MFC-L6902DW",
        "MFC-L5902DW",
        "MFC-L5702DW",
        "MFC-L6702DW",
      ],
      descricao:
        "Toner de alta capacidade Brother TN3472, ideal para ambientes corporativos com demandas intensas.",
    },
    {
      id: 21,
      nome: "TONER BROTHER TN450",
      imagem: "https://m.media-amazon.com/images/I/71VGUCxJi9L._AC_SX679_.jpg",
      compatibilidade: [
        "HL2240",
        "HL2270DW",
        "DCP7065DN",
        "MFC7360N",
        "MFC7460DN",
        "MFC7860DW",
      ],
      descricao:
        "Toner Brother TN450 confiável para impressões com textos nítidos e excelente rendimento.",
    },
    {
      id: 22,
      nome: "TONER BROTHER TN3612XL / TN3662XL 25K",
      imagem:
        "https://www.brother.com.br/-/media/brother/product-catalog-media/images/2023/10/16/21/07/tn3662xls-cartridge-front.jpg",
      compatibilidade: [
        "Brother DCP-L5512DN",
        "Brother DCP-L5662DN",
        "Brother HL-L5212DN",
        "Brother HL-L5212DW",
        "Brother HL-L6412DW",
        "Brother MFC-L5912DW",
        "Brother MFC-L6912DW",
      ],
      descricao:
        "Toner Brother TN3612XL/TN3662XL de altíssimo rendimento (25.000 páginas). Ideal para uso intenso.",
    },
    {
      id: 23,
      nome: "TONER SAMSUNG D203U",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/1130603/toner_samsung_mlt_d203u_sl_m4020_preto_original_5323885_1_26e52415fc6caa727ebbd24a18746843.jpg",
      compatibilidade: [
        "Samsung Pro Xpress SL-M4020ND",
        "Samsung Pro Xpress SL-M4070FR",
      ],
      descricao:
        "Toner Samsung D203U para impressoras ProXpress. Excelente rendimento e confiabilidade para negócios.",
    },
    {
      id: 24,
      nome: "KIT COM 4 GARRAFAS DE TINTA EPSON T544",
      imagem: "https://img.kalunga.com.br/fotosdeprodutos/797659d.jpg",
      compatibilidade: [
        "Epson EcoTank L3150",
        "Epson EcoTank L3110",
        "Epson EcoTank L5190",
        "Epson EcoTank L5290",
        "Epson EcoTank L3250",
        "Epson EcoTank L3210",
      ],
      descricao:
        "Kit de 4 garrafas de tinta original Epson T544 CMYK para impressoras EcoTank. Alta qualidade e rendimento.",
    },
    {
      id: 25,
      nome: "KIT COM 4 GARRAFAS DE TINTA EPSON T664",
      imagem: "https://img.kalunga.com.br/fotosdeprodutos/797657d.jpg",
      compatibilidade: [
        "Epson L110",
        "Epson L120",
        "Epson L200",
        "Epson L210",
        "Epson L220",
        "Epson L355",
        "Epson L365",
        "Epson L375",
        "Epson L395",
        "Epson L396",
        "Epson L455",
        "Epson L495",
        "Epson L555",
        "Epson L565",
        "Epson L575",
        "Epson L1300",
      ],
      descricao:
        "Refis de tinta Epson T664 originais. Cores vibrantes e impressões econômicas para diversas linhas EcoTank.",
    },
    {
      id: 26,
      nome: "CARTUCHO CANON PFI-107 PRETO",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/447858/cartucho_de_tinta_canon_pfi107_130ml_3587676_6_20190918111735.jpg",
      compatibilidade: [
        "Canon imagePROGRAF IPF-670",
        "Canon imagePROGRAF IPF-680",
        "Canon imagePROGRAF IPF-685",
        "Canon imagePROGRAF IPF-780",
        "Canon imagePROGRAF IPF-770",
        "Canon imagePROGRAF IPF-785",
      ],
      descricao:
        "Cartucho de tinta Canon PFI-107 para impressoras de grande formato imagePROGRAF. Imagens precisas e profissionais.",
    },
    {
      id: 26,
      nome: "CARTUCHO CANON PFI-107 MBK",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/447858/cartucho_de_tinta_canon_pfi107_130ml_3587676_7_20190918111735.jpg",
      compatibilidade: [
        "Canon imagePROGRAF IPF-670",
        "Canon imagePROGRAF IPF-680",
        "Canon imagePROGRAF IPF-685",
        "Canon imagePROGRAF IPF-780",
        "Canon imagePROGRAF IPF-770",
        "Canon imagePROGRAF IPF-785",
      ],
      descricao:
        "Cartucho de tinta Canon PFI-107 para impressoras de grande formato imagePROGRAF. Imagens precisas e profissionais.",
    },
    {
      id: 500,
      nome: "CARTUCHO CANON PFI-107 CIANO",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/447858/cartucho_de_tinta_canon_pfi107_130ml_3587676_3_20190918111734.jpg",
      compatibilidade: [
        "Canon imagePROGRAF IPF-670",
        "Canon imagePROGRAF IPF-680",
        "Canon imagePROGRAF IPF-685",
        "Canon imagePROGRAF IPF-780",
        "Canon imagePROGRAF IPF-770",
        "Canon imagePROGRAF IPF-785",
      ],
      descricao:
        "Cartucho de tinta Canon PFI-107 Ciano para impressoras imagePROGRAF. Cores vivas e ótima precisão em projetos gráficos.",
    },
    {
      id: 501,
      nome: "CARTUCHO CANON PFI-107 MAGENTA",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/447858/cartucho_de_tinta_canon_pfi107_130ml_3587676_5_20190918111735.jpg",
      compatibilidade: [
        "Canon imagePROGRAF IPF-670",
        "Canon imagePROGRAF IPF-680",
        "Canon imagePROGRAF IPF-685",
        "Canon imagePROGRAF IPF-780",
        "Canon imagePROGRAF IPF-770",
        "Canon imagePROGRAF IPF-785",
      ],
      descricao:
        "Cartucho de tinta Canon PFI-107 Magenta para impressoras de grande formato. Garante tons precisos e qualidade superior.",
    },
    {
      id: 502,
      nome: "CARTUCHO CANON PFI-107 AMARELO",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/447858/cartucho_de_tinta_canon_pfi107_amarelo_3587676_3.jpg",
      compatibilidade: [
        "Canon imagePROGRAF IPF-670",
        "Canon imagePROGRAF IPF-680",
        "Canon imagePROGRAF IPF-685",
        "Canon imagePROGRAF IPF-780",
        "Canon imagePROGRAF IPF-770",
        "Canon imagePROGRAF IPF-785",
      ],
      descricao:
        "Cartucho de tinta Canon PFI-107 Amarelo para impressoras Canon imagePROGRAF. Alta definição e fidelidade de cor.",
    },
    {
      id: 27,
      nome: "CARTUCHO CANON PFI-102 PRETO",
      imagem:
        "https://www.creativecopias.com.br/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/9/8/9889_ampliada.jpg",
      compatibilidade: [
        "Canon imagePROGRAF iPF500",
        "Canon imagePROGRAF iPF510",
        "Canon imagePROGRAF iPF600",
        "Canon imagePROGRAF iPF605",
        "Canon imagePROGRAF iPF610",
        "Canon imagePROGRAF iPF620",
        "Canon imagePROGRAF iPF650",
        "Canon imagePROGRAF iPF655",
        "Canon imagePROGRAF iPF700",
        "Canon imagePROGRAF iPF710",
        "Canon imagePROGRAF iPF720",
        "Canon imagePROGRAF iPF750",
        "Canon imagePROGRAF iPF755",
        "Canon imagePROGRAF iPF760",
        "Canon imagePROGRAF iPF765",
      ],
      descricao:
        "Cartucho Canon PFI-102 com tinta pigmentada de alta precisão. Ideal para projetos técnicos e gráficos.",
    },
    {
      id: 28,
      nome: "CARTUCHO CANON PFI-102 MBK",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/447858/cartucho_de_tinta_canon_pfi102_130ml_3587384_7_20190918102644.jpg",
      compatibilidade: [
        "Canon imagePROGRAF iPF500",
        "Canon imagePROGRAF iPF510",
        "Canon imagePROGRAF iPF600",
        "Canon imagePROGRAF iPF605",
        "Canon imagePROGRAF iPF610",
        "Canon imagePROGRAF iPF620",
        "Canon imagePROGRAF iPF650",
        "Canon imagePROGRAF iPF655",
        "Canon imagePROGRAF iPF700",
        "Canon imagePROGRAF iPF710",
        "Canon imagePROGRAF iPF720",
        "Canon imagePROGRAF iPF750",
        "Canon imagePROGRAF iPF755",
        "Canon imagePROGRAF iPF760",
        "Canon imagePROGRAF iPF765",
      ],
      descricao:
        "Cartucho Canon PFI-102 com tinta pigmentada de alta precisão. Ideal para projetos técnicos e gráficos.",
    },
    {
      id: 29,
      nome: "CARTUCHO HP 664XL",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/F/6/F6V31AB-1_T1680778875.png",
      compatibilidade: [
        "HP Deskjet Ink Advantage 1115",
        "HP Deskjet Ink Advantage 2136",
        "HP Deskjet Ink Advantage 3636",
        "HP Deskjet Ink Advantage 3836",
        "HP Deskjet Ink Advantage 4536",
        "HP Deskjet Ink Advantage 3635",
        "HP Deskjet Ink Advantage 3776",
        "HP Deskjet Ink Advantage 3788",
        "HP Deskjet Ink Advantage 3790",
        "HP Deskjet Ink Advantage 2676",
        "HP Deskjet Ink Advantage 3786",
        "HP Deskjet Ink Advantage 5076",
        "HP Deskjet Ink Advantage 5276",
        "HP Deskjet Ink Advantage 4676",
      ],
      descricao:
        "Cartucho de tinta HP 664XL com alto rendimento. Ideal para quem busca economia e qualidade de impressão.",
    },
    {
      id: 30,
      nome: "CARTUCHO HP 664XL Colorido",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/F/6/F6V30AB-1_T1680778867.png",
      compatibilidade: [
        "HP Deskjet Ink Advantage 1115",
        "HP Deskjet Ink Advantage 2136",
        "HP Deskjet Ink Advantage 3636",
        "HP Deskjet Ink Advantage 3836",
        "HP Deskjet Ink Advantage 4536",
        "HP Deskjet Ink Advantage 3635",
        "HP Deskjet Ink Advantage 3776",
        "HP Deskjet Ink Advantage 3788",
        "HP Deskjet Ink Advantage 3790",
        "HP Deskjet Ink Advantage 2676",
        "HP Deskjet Ink Advantage 3786",
        "HP Deskjet Ink Advantage 5076",
        "HP Deskjet Ink Advantage 5276",
        "HP Deskjet Ink Advantage 4676",
      ],
      descricao:
        "Cartucho de tinta HP 664XL colorido de alto rendimento. Perfeito para quem precisa imprimir com cores vivas, qualidade e economia.",
    },

    {
      id: 31,
      nome: "CARTUCHO HP 662XL PRETO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/C/Z/CZ105AB-1_T1680778641.png",
      compatibilidade: [
        "HP Deskjet Ink Advantage 1015",
        "HP Deskjet Ink Advantage 1510",
        "HP Deskjet Ink Advantage 1518",
        "HP Deskjet Ink Advantage 2516",
        "HP Deskjet Ink Advantage 2546",
        "HP Deskjet Ink Advantage 2646",
        "HP Deskjet Ink Advantage 3516",
        "HP Deskjet Ink Advantage 3546",
        "HP Deskjet Ink Advantage 4645",
        "HP Deskjet Ink Advantage 2510",
        "HP Deskjet Ink Advantage 2540",
        "HP Deskjet Ink Advantage 2548",
        "HP Deskjet Ink Advantage 3510",
        "HP Deskjet Ink Advantage 3540",
        "HP Deskjet Ink Advantage 4515",
        "HP Deskjet Ink Advantage 4646",
        "HP Deskjet Ink Advantage 1016",
        "HP Deskjet Ink Advantage 1516",
        "HP Deskjet Ink Advantage 2515",
        "HP Deskjet Ink Advantage 2545",
        "HP Deskjet Ink Advantage 2645",
        "HP Deskjet Ink Advantage 3515",
        "HP Deskjet Ink Advantage 3545",
        "HP Deskjet Ink Advantage 4640",
        "HP Deskjet Ink Advantage 4648",
      ],
      descricao:
        "CARTUCHO HP 662XL com tinta de qualidade para impressões nítidas e confiáveis no dia a dia.",
    },
    {
      id: 32,
      nome: "CARTUCHO HP 662XL COLORIDO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/C/Z/CZ106AB-1_T1680778646.jpg",
      compatibilidade: [
        "HP Deskjet Ink Advantage 1015",
        "HP Deskjet Ink Advantage 1510",
        "HP Deskjet Ink Advantage 1518",
        "HP Deskjet Ink Advantage 2516",
        "HP Deskjet Ink Advantage 2546",
        "HP Deskjet Ink Advantage 2646",
        "HP Deskjet Ink Advantage 3516",
        "HP Deskjet Ink Advantage 3546",
        "HP Deskjet Ink Advantage 4645",
        "HP Deskjet Ink Advantage 2510",
        "HP Deskjet Ink Advantage 2540",
        "HP Deskjet Ink Advantage 2548",
        "HP Deskjet Ink Advantage 3510",
        "HP Deskjet Ink Advantage 3540",
        "HP Deskjet Ink Advantage 4515",
        "HP Deskjet Ink Advantage 4646",
        "HP Deskjet Ink Advantage 1016",
        "HP Deskjet Ink Advantage 1516",
        "HP Deskjet Ink Advantage 2515",
        "HP Deskjet Ink Advantage 2545",
        "HP Deskjet Ink Advantage 2645",
        "HP Deskjet Ink Advantage 3515",
        "HP Deskjet Ink Advantage 3545",
        "HP Deskjet Ink Advantage 4640",
        "HP Deskjet Ink Advantage 4648",
      ],
      descricao:
        "CARTUCHO HP 662XL com tinta de qualidade para impressões nítidas e confiáveis no dia a dia.",
    },
    {
      id: 33,
      nome: "CARTUCHO HP 954XL PRETO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/L/0/L0S71AB-1_T1680779434.png",
      compatibilidade: [
        "Officejet Pro 8700",
        "Officejet Pro 8710",
        "Officejet Pro 8715",
        "Officejet Pro 7720",
        "Officejet Pro 7740",
        "Officejet Pro 8720",
        "Officejet Pro 8716",
        "Officejet Pro 8725",
        "Officejet Pro 8210",
        "Officejet Pro 8740",
        "Officejet Pro P27724DW",
      ],
      descricao:
        "Cartucho de tinta HP 954XL de alta capacidade. Impressões com cores nítidas e vibrantes em documentos empresariais.",
    },
    {
      id: 34,
      nome: "CARTUCHO HP 954XL CIANO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/L/0/L0S62AB-1_T1680779414.png",
      compatibilidade: [
        "Officejet Pro 8700",
        "Officejet Pro 8710",
        "Officejet Pro 8715",
        "Officejet Pro 7720",
        "Officejet Pro 7740",
        "Officejet Pro 8720",
        "Officejet Pro 8716",
        "Officejet Pro 8725",
        "Officejet Pro 8210",
        "Officejet Pro 8740",
        "Officejet Pro P27724DW",
      ],
      descricao:
        "Cartucho HP 954XL na cor CIANO. Alta capacidade e qualidade profissional para impressões com tons vivos e duradouros.",
    },
    {
      id: 35,
      nome: "CARTUCHO HP 954XL MAGENTA",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/L/0/L0S65AB-1_T1680779421.png",
      compatibilidade: [
        "Officejet Pro 8700",
        "Officejet Pro 8710",
        "Officejet Pro 8715",
        "Officejet Pro 7720",
        "Officejet Pro 7740",
        "Officejet Pro 8720",
        "Officejet Pro 8716",
        "Officejet Pro 8725",
        "Officejet Pro 8210",
        "Officejet Pro 8740",
        "Officejet Pro P27724DW",
      ],
      descricao:
        "Cartucho HP 954XL na cor MAGENTA. Ideal para impressões com cores intensas e excelente definição em materiais empresariais.",
    },
    {
      id: 36,
      nome: "CARTUCHO HP 954XL AMARELO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/L/0/L0S68AB-1_T1680779427.png",
      compatibilidade: [
        "Officejet Pro 8700",
        "Officejet Pro 8710",
        "Officejet Pro 8715",
        "Officejet Pro 7720",
        "Officejet Pro 7740",
        "Officejet Pro 8720",
        "Officejet Pro 8716",
        "Officejet Pro 8725",
        "Officejet Pro 8210",
        "Officejet Pro 8740",
        "Officejet Pro P27724DW",
      ],
      descricao:
        "Cartucho HP 954XL na cor amarela. Rendimento elevado com qualidade superior para gráficos, tabelas e documentos coloridos.",
    },

    {
      id: 37,
      nome: "CARTUCHO HP 964XL PRETO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/3/J/3JA57AL-1_T1680771940.png",
      compatibilidade: ["HP OfficeJet Pro 9010", "HP OfficeJet Pro 9020"],
      descricao:
        "Cartucho HP 964XL com tecnologia de tinta pigmentada para impressões duradouras e resistentes à água.",
    },
    {
      id: 38,
      nome: "CARTUCHO HP 964XL CIANO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/3/J/3JA54AL-1_T1680771928.png",
      compatibilidade: ["HP OfficeJet Pro 9010", "HP OfficeJet Pro 9020"],
      descricao:
        "Cartucho HP 964XL na cor CIANO, com tinta pigmentada que garante impressões vívidas, duráveis e resistentes à água.",
    },
    {
      id: 349,
      nome: "CARTUCHO HP 964XL MAGENTA",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/3/J/3JA55AL-1_T1680771932.png",
      compatibilidade: ["HP OfficeJet Pro 9010", "HP OfficeJet Pro 9020"],
      descricao:
        "Cartucho HP 964XL na cor MAGENTA, ideal para impressões com cores intensas e resistência à água e ao desbotamento.",
    },
    {
      id: 40,
      nome: "CARTUCHO HP 964XL AMARELO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/3/J/3JA56AL-1_T1680771936.png",
      compatibilidade: ["HP OfficeJet Pro 9010", "HP OfficeJet Pro 9020"],
      descricao:
        "Cartucho HP 964XL na cor amarela, com alto rendimento e excelente definição para gráficos e imagens coloridas.",
    },
  ];

  listaDeToners = [
    {
      id: 1,
      nome: "TONER HP CB540/41/42/43",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/C/E/CE310A-1_T1680778090.png",
      compatibilidade: [
        "Laserjet CP1215",
        "Laserjet CP1515",
        "Laserjet CP1518",
        "Laserjet CM1312",
      ],
      descricao:
        "Toner HP 125A colorido ideal para impressões com cores vibrantes e qualidade profissional.",
    },
    {
      id: 2,
      nome: "TONER HP CE310/11/12/13A",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/C/E/CE310A-1_T1680778090.png",
      compatibilidade: [
        "LaserJet HP CP1025",
        "LaserJet HP CP1025NW",
        "LaserJet HP CP1020",
        "LaserJet HP CP1020NW",
        "LaserJet HP M175A",
        "LaserJet HP M175NW",
      ],
      descricao:
        "Toner HP 126A colorido com qualidade de imagem superior, ideal para documentos e gráficos detalhados.",
    },
    {
      id: 4,
      nome: "TONER HP W1105A 105A PRETO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/h/p/hp_105a_black_toner_cartridge_w1105ab_w1105-00003_brazil_1.png",
      compatibilidade: [
        "HP LaserJet 107a",
        "HP LaserJet 107W",
        "HP LaserJet MFP-M135a",
        "HP LaserJet MFP-M135W",
      ],
      descricao:
        "Toner preto HP 105A com alto rendimento para impressões nítidas e profissionais em preto e branco.",
    },
    {
      id: 5,
      nome: "TONER HP W1330XC PRETO 330X",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_681958-MLB53072369493_122022-O-toner-original-hp-m432fdn-m432-m408-w1330x-w1330x-nfe.webp",
      compatibilidade: [
        "Multifuncional HP Laserjet M432FDN",
        "Multifuncional HP Laserjet M408DN",
      ],
      descricao:
        "Toner HP 330X de alta capacidade, ideal para ambientes corporativos com grande volume de impressão.",
    },
    {
      id: 6,
      nome: "TONER HP CE255X",
      imagem:
        "https://cdn.awsli.com.br/2500x2500/109/109824/produto/3493855/a558204ae7.jpg",
      compatibilidade: [
        "HP P3015",
        "HP P3015N",
        "HP P3015D",
        "HP P3015DN",
        "HP P3015X",
        "HP Enterprise M525F",
        "HP Enterprise M521DN",
      ],
      descricao:
        "Toner HP CE255X de alto rendimento ideal para impressoras de médio a grande porte. Ótima performance e nitidez.",
    },
    {
      id: 7,
      nome: "TONER HP CE278A",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/C/E/CE278AB-1_T1680778075.png",
      compatibilidade: [
        "HP Laserjet P1566",
        "HP Laserjet P1606",
        "HP Laserjet P1606N",
        "HP Laserjet P1606DN",
        "HP Laserjet M1536",
        "HP Laserjet M1536DNF",
      ],
      descricao:
        "Toner HP CE278A ideal para impressões diárias com textos nítidos e gráficos definidos.",
    },
    {
      id: 8,
      nome: "TONER HP CE285A/ 85A PRETO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/5/7/5750abc3da2c7b4214fbfece.png",
      compatibilidade: [
        "HP LaserJet P1102",
        "HP LaserJet P1102W",
        "HP LaserJet M1132",
        "HP LaserJet M1210",
        "HP LaserJet M1212",
        "HP LaserJet M1130",
        "HP LaserJet M1217",
        "HP LaserJet M1217FW",
      ],
      descricao:
        "Toner preto HP 85A para impressões de alta qualidade e ótimo rendimento em uso doméstico e corporativo.",
    },
    {
      id: 9,
      nome: "TONER HP CE505A / 505A PRETO",
      imagem:
        "https://m.media-amazon.com/images/I/71Fsn57MiyL.__AC_SX300_SY300_QL70_ML2_.jpg",
      compatibilidade: [
        "Impressora HP LaserJet P2035",
        "Impressora HP LaserJet P2055",
      ],
      descricao:
        "Cartucho de toner HP CE505A ideal para impressoras rápidas com excelente custo-benefício e durabilidade.",
    },
    {
      id: 10,
      nome: "TONER HP CF226X",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/27440/toner_hp_26x_original_cf226x_black_m402dn_m402_m426_10230_1_20191128132158.jpg",
      compatibilidade: [
        "HP Laserjet Pro M426FDW",
        "HP Laserjet Pro M426DW",
        "HP Laserjet Pro M426FDN",
        "HP Laserjet Pro M402DNE",
        "HP Laserjet Pro M402DN",
        "HP Laserjet Pro M402N",
        "HP Laserjet Pro M402D",
      ],
      descricao:
        "Toner HP CF226X de alto rendimento para impressoras profissionais com desempenho consistente e eficiente.",
    },
    {
      id: 11,
      nome: "TONER HP Q2612A",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/Q/2/Q2612AB-1_T1680779606.png",
      compatibilidade: [
        "HP LaserJet 1012",
        "HP LaserJet 1015",
        "HP LaserJet 1018",
        "HP LaserJet 1020",
        "HP LaserJet 1022",
        "HP LaserJet 1022n",
        "HP LaserJet 1022nw",
        "HP LaserJet 3015",
        "HP LaserJet 3030",
        "HP LaserJet 3050",
        "HP LaserJet 3052",
        "HP LaserJet 3055",
        "HP 1319 Fax",
        "HP M1319",
        "HP M1005",
        "HP M1005MFP",
      ],
      descricao:
        "Cartucho de toner HP 12A preto para impressoras LaserJet. Proporciona impressões nítidas com excelente rendimento.",
    },
    {
      id: 12,
      nome: "TONER SAMSUNG MLT-D101S",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/S/U/SU700A-1_T1682541589.png",
      compatibilidade: [
        "Samsung ML2165",
        "Samsung ML2165W",
        "Samsung SCX3405W",
        "Samsung SCX3405FW",
      ],
      descricao:
        "Toner preto Samsung MLT-D101S com ótimo custo-benefício e alta qualidade de impressão.",
    },
    {
      id: 17,
      nome: "TONER BROTHER TNB021",
      imagem:
        "https://www.brother.com.br/-/media/brother/product-catalog-media/images/2021/04/12/07/26/tnb021_0.png",
      compatibilidade: [
        "Brother DCP-7520DW",
        "Brother DCP-7535DW",
        "Brother DCP-B7650DW",
        "Brother HL-B2080DW",
      ],
      descricao:
        "Cartucho de toner Brother TN-B021 preto com ótima performance em equipamentos da linha B.",
    },
    {
      id: 18,
      nome: "TONER BROTHER TN1060",
      imagem:
        "https://www.brother.com.br/-/media/brother/product-catalog-media/images/2021/03/23/08/47/tn-1060_2.png",
      compatibilidade: [
        "Brother HL1112",
        "Brother HL1202",
        "Brother HL1212W",
        "Brother DCP1602",
        "Brother DCP1512",
        "Brother DCP1617NW",
      ],
      descricao:
        "Toner preto Brother TN1060 com rendimento econômico e impressões com nitidez profissional.",
    },
    {
      id: 19,
      nome: "TONER BROTHER TN2370",
      imagem:
        "https://www.brother.com.br/-/media/brother/product-catalog-media/images/2022/02/01/10/59/tn2370.png",
      compatibilidade: [
        "HL-L2360DW",
        "HL-L2320D",
        "MFC-L2720DW",
        "MFC-L2740DW",
        "MFC-L2700DW",
        "DCP-L2520DW",
        "DCP-L2540DW",
      ],
      descricao:
        "Cartucho de toner Brother TN2370 ideal para impressões de alto volume com qualidade e durabilidade.",
    },
    {
      id: 20,
      nome: "TONER BROTHER TN3472",
      imagem:
        "https://www.brother.com.br/-/media/brother/product-catalog-media/images/2021/03/23/09/04/tn3472_front.png",
      compatibilidade: [
        "HL-L5102DW",
        "HL-L6402DW",
        "HL-L6202DW",
        "HL-L5202DW",
        "DCP-L5602DN",
        "DCP-L5652DN",
        "DCP-L5502DN",
        "MFC-L5802DW",
        "MFC-L6902DW",
        "MFC-L5902DW",
        "MFC-L5702DW",
        "MFC-L6702DW",
      ],
      descricao:
        "Toner de alta capacidade Brother TN3472, ideal para ambientes corporativos com demandas intensas.",
    },
    {
      id: 21,
      nome: "TONER BROTHER TN450",
      imagem: "https://m.media-amazon.com/images/I/71VGUCxJi9L._AC_SX679_.jpg",
      compatibilidade: [
        "HL2240",
        "HL2270DW",
        "DCP7065DN",
        "MFC7360N",
        "MFC7460DN",
        "MFC7860DW",
      ],
      descricao:
        "Toner Brother TN450 confiável para impressões com textos nítidos e excelente rendimento.",
    },
    {
      id: 22,
      nome: "TONER BROTHER TN3612XL / TN3662XL 25K",
      imagem:
        "https://www.brother.com.br/-/media/brother/product-catalog-media/images/2023/10/16/21/07/tn3662xls-cartridge-front.jpg",
      compatibilidade: [
        "Brother DCP-L5512DN",
        "Brother DCP-L5662DN",
        "Brother HL-L5212DN",
        "Brother HL-L5212DW",
        "Brother HL-L6412DW",
        "Brother MFC-L5912DW",
        "Brother MFC-L6912DW",
      ],
      descricao:
        "Toner Brother TN3612XL/TN3662XL de altíssimo rendimento (25.000 páginas). Ideal para uso intenso.",
    },
    {
      id: 23,
      nome: "TONER SAMSUNG D203U",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/1130603/toner_samsung_mlt_d203u_sl_m4020_preto_original_5323885_1_26e52415fc6caa727ebbd24a18746843.jpg",
      compatibilidade: [
        "Samsung Pro Xpress SL-M4020ND",
        "Samsung Pro Xpress SL-M4070FR",
      ],
      descricao:
        "Toner Samsung D203U para impressoras ProXpress. Excelente rendimento e confiabilidade para negócios.",
    },
    {
      id: 120,
      nome: "TONER HP CB435/436/285/278A - COMPATÍVEL",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/571937/toner_hp_cb435_436_285_2k_evolut_2830_1_20240430182403.jpg",
      compatibilidade: [
        "HP LaserJet P1005",
        "HP LaserJet P1006",
        "HP LaserJet P1100 / P1102",
        "HP LaserJet Pro M1132 / M1210 / M1212NF",
        "HP LaserJet Pro P1560 / P1606",
        "Canon LBP3010 / LBP3050 / LBP3100",
      ],
      descricao:
        "Toner compatível para substituir os códigos OEM CB435A, CB436A, CE285A e CE278A, com rendimento aproximado de 2.000 páginas — ideal para uso diário em monocromático.",
    },
    {
      id: 121,
      nome: "TONER HP Q2612A - COMPATÍVEL",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/406359/toner_compativel_para_hp_q2612a_2612_12a_evolut_para_1020_1022_1022n_1022nw_3020_3050n_3052_m1005_m1_5931_1_76554b0333c3a93bd525609aba300901.jpg",
      compatibilidade: [
        "HP LaserJet 1010 / 1012 / 1015 / 1018",
        "HP LaserJet 1020 / 1022",
        "HP LaserJet 3015 / 3020 / 3030",
        "HP LaserJet 3050 / 3052 / 3055",
        "HP LaserJet M1005 MFP",
        "HP LaserJet M1319 MFP",
      ],
      descricao:
        "Toner compatível que substitui o HP 12A (Q2612A), com rendimento estimado em 2.000 páginas, compatível com várias impressoras LaserJet antigas da HP.",
    },
    {
      id: 122,
      nome: "TONER HP CF283A - COMPATÍVEL",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/1094922/toner_cartridge_hp_cf283a_evolut_1217_1_d7bc38b8be4dd823f2a371da3d81dd08.jpg",
      compatibilidade: [
        "HP LaserJet Pro MFP M201DW",
        "HP LaserJet Pro MFP M201N",
        "HP LaserJet Pro MFP M225DN",
        "HP LaserJet Pro MFP M225DW",
        "HP LaserJet Pro MFP M125a / M125nw / M127fn / M127fw",
      ],
      descricao:
        "Toner compatível para o cartucho HP 83A (CF283A), com rendimento padrão de cerca de 1.500 páginas, ideal para a linha Pro MFP da HP.",
    },
    {
      id: 123,
      nome: "TONER HP W105A/W1105A - COMPATÍVEL",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_689106-MLA84676262158_052025-O.webp",
      compatibilidade: [
        "HP Laser MFP 107a",
        "HP Laser 107w",
        "HP Laser MFP 135a",
        "HP Laser MFP 135w",
        "HP Laser MFP 137fnw",
      ],
      descricao:
        "Toner compatível para o cartucho HP 105A (W1105A), rendimento aproximado de 1.000 páginas, projetado para impressoras compactas HP de série 100-MFP.",
    },
    {
      id: 124,
      nome: "TONER HP CF280X/CE505X - COMPATÍVEL",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/406359/toner_compativel_para_hp_280x_505x_80x_05x_para_p2055dn_m425dw_m401dw_p2055_m425_m401_p2055n_m425dn__7851_1_650c917f5f23567c1a11b88e7d5784f2.jpg",
      compatibilidade: [
        "HP LaserJet Pro 400 M401 series (M401a, M401d, M401dn, M401dw, M401n, M401dne)",
        "HP LaserJet Pro 400 MFP M425 series (M425dn, M425dw)",
      ],
      descricao:
        "Toner compatível high-yield equivalente ao CF280X (80X), com rendimento de aproximadamente 6.900 páginas, ideal para alto volume em escritórios.",
    },
    {
      id: 125,
      nome: "TONER HP CF280A/CE505A - COMPATÍVEL",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/730006/toner_ce505a_505a_05a_cf280a_280a_80a_p2035_p2050_m401_1339225629_1_8a4e5e3e34815382a5bb478e790bf9d5.jpg",
      compatibilidade: [
        "HP LaserJet Pro 400 M401 series (M401a, M401d, M401dn, M401dw, M401n, M401dne)",
        "HP LaserJet Pro 400 MFP M425 series (M425dn, M425dw)",
      ],
      descricao:
        "Toner compatível padrão para substituição do CF280A (80A), com rendimento de aproximadamente 2.560–2.700 páginas, excelente para uso rotineiro.",
    },
    {
      id: 126,
      nome: "TONER SAMSUNG D203U - COMPATÍVEL",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/406359/toner_compativel_com_samsung_d203_mlt203u_evolut_para_m4070fd_m4020nd_m3870fw_m3820dw_m_4070_4020_38_8075_1_42d475a4b14fa2899e4c8d1b7d15e235.jpg",
      compatibilidade: [
        "Samsung ProXpress M4020N",
        "Samsung ProXpress M4020ND",
        "Samsung ProXpress M4070",
        "Samsung ProXpress M4070FR",
        "Samsung SL-M4020ND",
        "Samsung SL-M4070FR",
      ],
      descricao:
        "Toner compatível da linha ultra high-yield, equivalente ao código MLT-D203U, com rendimento de cerca de 15 000 páginas — ideal para escritórios com alto volume de impressão.",
    },

    {
      id: 127,
      nome: "TONER SAMSUNG D111S - COMPATÍVEL",
      imagem:
        "https://a-static.mlcdn.com.br/800x560/cartuho-toner-compativel-samsung-d111-m2020-m2070-evolut/maxtonercartuchos/ffa1d6e4f32a11ec8f3e4201ac185078/657652f36a2bbb32963355eeb35651bf.jpeg",
      compatibilidade: [
        "Samsung Xpress SL-M2020",
        "Samsung Xpress SL-M2020W",
        "Samsung Xpress SL-M2022",
        "Samsung Xpress SL-M2022W",
        "Samsung Xpress SL-M2024",
        "Samsung Xpress SL-M2024W",
        "Samsung Xpress SL-M2070",
        "Samsung Xpress SL-M2070W",
        "Samsung Xpress SL-M2070FW",
        "Samsung M2020",
        "Samsung M2020W",
        "Samsung M2022",
        "Samsung M2022W",
        "Samsung M2024",
        "Samsung M2024W",
      ],
      descricao:
        "Toner compatível para MLT-D111S (111S), com rendimento padrão de cerca de 1 000 páginas, ideal para impressoras compactas da linha Xpress e M-series da Samsung.",
    },

    {
      id: 128,
      nome: "TONER SAMSUNG D101S - COMPATÍVEL",
      imagem:
        "https://a-static.mlcdn.com.br/1500x1500/toner-evolut-mlt-d101s-d101-15k-2160-2165-3400-3405/livrariasantaterezinha/5aba6854e8bc11eba9a04201ac18500e/a505d4b7ff029cf83142a2d34eee4a86.jpeg",
      compatibilidade: [
        "Samsung ML-2160",
        "Samsung ML-2162",
        "Samsung ML-2165 / ML-2165W",
        "Samsung ML-2168 / ML-2168W",
        "Samsung SCX-3400",
        "Samsung SCX-3405 / SCX-3405W / SCX-3405FW",
        "Samsung SF-760 / SF-760P",
      ],
      descricao:
        "Toner compatível para MLT-D101S, rendimento estimado de 1 500 páginas a 5 % de cobertura, compatível com várias impressoras ML e SCX da Samsung.",
    },
    {
      id: 129,
      nome: "TONER SAMSUNG D104S - COMPATÍVEL",
      imagem:
        "https://netcomputadores.com.br/dbimg/produtos/compchd104s_78890_g.jpg",
      compatibilidade: [
        "Samsung ML-1660 / ML-1661 / ML-1665 / ML-1666 / ML-1667 / ML-1675",
        "Samsung ML-1860 / ML-1861 / ML-1864 / ML-1865 / ML-1865W",
        "Samsung SCX-3200 / SCX-3201 / SCX-3205 / SCX-3205W / SCX-3206 / SCX-3210 / SCX-3217 / SCX-3218",
      ],
      descricao:
        "Toner compatível padrão para MLT-D104S (104S), com rendimento de cerca de 1 500 páginas, compatível com diversas impressoras ML e SCX da Samsung.",
    },
    {
      id: 130,
      nome: "TONER BROTHER TN3472 - COMPATÍVEL",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/571937/toner_brother_tn_3472_tn_880_12k_evolut_5228_1_fd280db465a89714b58682caee8338bb_20240430202219.png",
      compatibilidade: ["Brother HL-L5102DN", "Brother L5102DN series"],
      descricao:
        "Toner compatível para o modelo TN3472, ideal para impressoras Brother Pro-series como L5102DN, com rendimento elevado e desempenho profissional.",
    },
    {
      id: 131,
      nome: "TONER BROTHER TN2370/2340/660 - COMPATÍVEL",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/1383299/toner_brother_tn2370_660_compativel_61_1_6d1f8cb1ef418af0e0d72bdb694b56a0.jpg",
      compatibilidade: [
        "Brother HL-L2300D",
        "Brother HL-L2305W",
        "Brother HL-L2320D",
        "Brother HL-L2340DW",
        "Brother HL-L2360DW",
        "Brother DCP-L2520DW",
        "Brother DCP-L2540DW",
        "Brother MFC-L2700DW",
        "Brother MFC-L2720DW",
        "Brother MFC-L2740DW",
      ],
      descricao:
        "Toner compatível que cobre as séries TN2370/TN2340 e TN660, com rendimento de até 2 600 páginas (alto rendimento).",
    },
    {
      id: 132,
      nome: "TONER BROTHER TN1060 - COMPATÍVEL",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/406359/toner_compativel_para_brother_tn1060_tn1000_evolut_para_hl_1212w_dcp_1617nw_hl_1210w_mfc_1810e_dcp16_5939_1_51fca44aa557b92969e9c971d69251dd.jpg",
      compatibilidade: [
        "Brother HL-1110 / HL-1110E / HL-1110R",
        "Brother HL-1112 series",
        "Brother HL-1210W / HL-1212W",
        "Brother DCP-1510 / DCP-1510E / DCP-1510R",
        "Brother DCP-1512 series",
        "Brother DCP-1610W",
        "Brother MFC-1810 series",
        "Brother MFC-1815R",
        "Brother MFC-1910W",
      ],
      descricao:
        "Toner compatível para TN1060, com rendimento aproximado de 1 000 páginas, ideal para impressoras domésticas compactas da Brother.",
    },
    {
      id: 133,
      nome: "TONER BROTHER TN620/650 - COMPATÍVEL",
      imagem:
        "https://http2.mlstatic.com/D_Q_NP_908289-MLA85745401184_062025-O.webp",
      compatibilidade: [
        "Brother HL-5340D",
        "Brother HL-5370DW / HL-5370DWT",
        "Brother DCP-8080DN / DCP-8085DN",
        "Brother MFC-8480DN",
        "Brother MFC-8680DN",
        "Brother MFC-8690DW",
        "Brother MFC-8890DW",
        "Brother MFC-8880DN",
      ],
      descricao:
        "Toner compatível padrão (TN620) e high yield (TN650) com rendimento de até 8 000 páginas, indicado para ambientes empresariais com demanda elevada.",
    },
    {
      id: 134,
      nome: "TONER BROTHER TN420/450 - COMPATÍVEL",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/406359/toner_compativel_para_brother_tn450_420_410_evolut_p_hl2280dw_hl2270dw_hl2250dn_hl2135w_mfc7460dn_mf_8077_1_e5c6559e78e83a1098b0e329ac846cba.jpg",
      compatibilidade: [
        "Brother DCP-7060D / DCP-7065DN",
        "Brother HL-2220 / HL-2230",
        "Brother HL-2240 / HL-2240D",
        "Brother HL-2270DW / HL-2275DW / HL-2280DW",
        "Brother IntelliFAX-2840 / IntelliFAX-2940",
        "Brother MFC-7240 / MFC-7360N / MFC-7365DN / MFC-7460DN / MFC-7860DW",
      ],
      descricao:
        "Toner compatível padrão (TN420) ou high-yield (TN450), com rendimento médio e indicado para uso em ambientes domésticos e pequenos escritórios.",
    },
    {
      id: 135,
      nome: "TONER BROTHER TN3382 - COMPATÍVEL",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_900830-MLB78238112206_082024-O.webp",
      compatibilidade: [
        "Brother HL-5440D / HL-5450DN",
        "Brother HL-5470DW / HL-5470DWT",
        "Brother HL-6180DW / HL-6180DWT",
        "Brother DCP-8110DN / DCP-8150DN / DCP-8155DN",
        "Brother MFC-8510DN / MFC-8520DN",
        "Brother MFC-8710DW / MFC-8910DW / MFC-8950DW / MFC-8950DWT",
      ],
      descricao:
        "Toner compatível para TN3382 (e variantes TN750/TN3340), com rendimento elevado (cerca de 8 000 páginas) para uso em ambientes de alto volume.",
    },
    {
      id: 136,
      nome: "TONER BROTHER TN3392 - COMPATÍVEL",
      imagem:
        "https://http2.mlstatic.com/D_NQ_814973-MLB85454312883_052025-V.webp",
      compatibilidade: [
        "Brother HL-5440D / HL-5450DN",
        "Brother HL-5470DW",
        "Brother HL-6180DW",
        "Brother MFC-8510DN / MFC-8710DW / MFC-8910DW",
      ],
      descricao:
        "Toner compatível para TN3392 (versão de alta capacidade similar ao TN780), com rendimento estimado de ~3 000 páginas e alta durabilidade.",
    },
    {
      id: 137,
      nome: "TONER BROTHER TNB021 - COMPATÍVEL",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/448593/toner_evolut_compativel_brother_tnb021_2_6k_26407_1_4a2ca4db767ccb5f6b5b87aaf54f3ee9.jpg",
      compatibilidade: [
        "Brother HL-B2100DB",
        "Brother HL-B2180DWB",
        "Brother DCP-B7600DB",
        "Brother DCP-B7640DWB",
        "Brother MFC-B7810DWB",
      ],
      descricao:
        "Toner compatível de alto rendimento equivalente ao TNB021. Aproximadamente 2 600 páginas conforme ISO/IEC 19752, ideal para uso frequente em escritórios que demandam impressões em volume com qualidade consistente.",
    },
  ];

  listaDeCartuchos = [
    {
      id: 26,
      nome: "CARTUCHO CANON PFI-107 PRETO",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/447858/cartucho_de_tinta_canon_pfi107_130ml_3587676_6_20190918111735.jpg",
      compatibilidade: [
        "Canon imagePROGRAF IPF-670",
        "Canon imagePROGRAF IPF-680",
        "Canon imagePROGRAF IPF-685",
        "Canon imagePROGRAF IPF-780",
        "Canon imagePROGRAF IPF-770",
        "Canon imagePROGRAF IPF-785",
      ],
      descricao:
        "Cartucho de tinta Canon PFI-107 para impressoras de grande formato imagePROGRAF. Imagens precisas e profissionais.",
    },
    {
      id: 26,
      nome: "CARTUCHO CANON PFI-107 MBK",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/447858/cartucho_de_tinta_canon_pfi107_130ml_3587676_7_20190918111735.jpg",
      compatibilidade: [
        "Canon imagePROGRAF IPF-670",
        "Canon imagePROGRAF IPF-680",
        "Canon imagePROGRAF IPF-685",
        "Canon imagePROGRAF IPF-780",
        "Canon imagePROGRAF IPF-770",
        "Canon imagePROGRAF IPF-785",
      ],
      descricao:
        "Cartucho de tinta Canon PFI-107 para impressoras de grande formato imagePROGRAF. Imagens precisas e profissionais.",
    },
    {
      id: 500,
      nome: "CARTUCHO CANON PFI-107 CIANO",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/447858/cartucho_de_tinta_canon_pfi107_130ml_3587676_4_20190918111734.jpg",
      compatibilidade: [
        "Canon imagePROGRAF IPF-670",
        "Canon imagePROGRAF IPF-680",
        "Canon imagePROGRAF IPF-685",
        "Canon imagePROGRAF IPF-780",
        "Canon imagePROGRAF IPF-770",
        "Canon imagePROGRAF IPF-785",
      ],
      descricao:
        "Cartucho de tinta Canon PFI-107 Ciano para impressoras imagePROGRAF. Cores vivas e ótima precisão em projetos gráficos.",
    },
    {
      id: 501,
      nome: "CARTUCHO CANON PFI-107 MAGENTA",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/447858/cartucho_de_tinta_canon_pfi107_130ml_3587676_5_20190918111735.jpg",
      compatibilidade: [
        "Canon imagePROGRAF IPF-670",
        "Canon imagePROGRAF IPF-680",
        "Canon imagePROGRAF IPF-685",
        "Canon imagePROGRAF IPF-780",
        "Canon imagePROGRAF IPF-770",
        "Canon imagePROGRAF IPF-785",
      ],
      descricao:
        "Cartucho de tinta Canon PFI-107 Magenta para impressoras de grande formato. Garante tons precisos e qualidade superior.",
    },
    {
      id: 502,
      nome: "CARTUCHO CANON PFI-107 AMARELO",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/447858/cartucho_de_tinta_canon_pfi107_130ml_3587676_3_20190918111734.jpg",
      compatibilidade: [
        "Canon imagePROGRAF IPF-670",
        "Canon imagePROGRAF IPF-680",
        "Canon imagePROGRAF IPF-685",
        "Canon imagePROGRAF IPF-780",
        "Canon imagePROGRAF IPF-770",
        "Canon imagePROGRAF IPF-785",
      ],
      descricao:
        "Cartucho de tinta Canon PFI-107 Amarelo para impressoras Canon imagePROGRAF. Alta definição e fidelidade de cor.",
    },
    {
      id: 27,
      nome: "CARTUCHO CANON PFI-102 PRETO",
      imagem:
        "https://www.creativecopias.com.br/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/9/8/9889_ampliada.jpg",
      compatibilidade: [
        "Canon imagePROGRAF iPF500",
        "Canon imagePROGRAF iPF510",
        "Canon imagePROGRAF iPF600",
        "Canon imagePROGRAF iPF605",
        "Canon imagePROGRAF iPF610",
        "Canon imagePROGRAF iPF620",
        "Canon imagePROGRAF iPF650",
        "Canon imagePROGRAF iPF655",
        "Canon imagePROGRAF iPF700",
        "Canon imagePROGRAF iPF710",
        "Canon imagePROGRAF iPF720",
        "Canon imagePROGRAF iPF750",
        "Canon imagePROGRAF iPF755",
        "Canon imagePROGRAF iPF760",
        "Canon imagePROGRAF iPF765",
      ],
      descricao:
        "Cartucho Canon PFI-102 com tinta pigmentada de alta precisão. Ideal para projetos técnicos e gráficos.",
    },
    {
      id: 28,
      nome: "CARTUCHO CANON PFI-102 MBK",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/447858/cartucho_de_tinta_canon_pfi102_130ml_3587384_7_20190918102644.jpg",
      compatibilidade: [
        "Canon imagePROGRAF iPF500",
        "Canon imagePROGRAF iPF510",
        "Canon imagePROGRAF iPF600",
        "Canon imagePROGRAF iPF605",
        "Canon imagePROGRAF iPF610",
        "Canon imagePROGRAF iPF620",
        "Canon imagePROGRAF iPF650",
        "Canon imagePROGRAF iPF655",
        "Canon imagePROGRAF iPF700",
        "Canon imagePROGRAF iPF710",
        "Canon imagePROGRAF iPF720",
        "Canon imagePROGRAF iPF750",
        "Canon imagePROGRAF iPF755",
        "Canon imagePROGRAF iPF760",
        "Canon imagePROGRAF iPF765",
      ],
      descricao:
        "Cartucho Canon PFI-102 com tinta pigmentada de alta precisão. Ideal para projetos técnicos e gráficos.",
    },

    {
      id: 511,
      nome: "CARTUCHO CANON PFI-102 CIANO",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/447858/cartucho_de_tinta_canon_pfi102_130ml_3587384_5_20190918102643.jpg",
      compatibilidade: [
        "Canon imagePROGRAF iPF500",
        "Canon imagePROGRAF iPF510",
        "Canon imagePROGRAF iPF600",
        "Canon imagePROGRAF iPF605",
        "Canon imagePROGRAF iPF610",
        "Canon imagePROGRAF iPF650",
        "Canon imagePROGRAF iPF655",
        "Canon imagePROGRAF iPF700",
        "Canon imagePROGRAF iPF710",
        "Canon imagePROGRAF iPF720",
        "Canon imagePROGRAF iPF750",
        "Canon imagePROGRAF iPF755",
      ],
      descricao:
        "Cartucho de tinta Canon PFI-102 Ciano pigmentado. Alta fidelidade de cor e resistência à umidade e desbotamento.",
    },
    {
      id: 512,
      nome: "CARTUCHO CANON PFI-102 MAGENTA",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/447858/cartucho_de_tinta_canon_pfi102_130ml_3587384_6_20190918102643.jpg",
      compatibilidade: [
        "Canon imagePROGRAF iPF500",
        "Canon imagePROGRAF iPF510",
        "Canon imagePROGRAF iPF600",
        "Canon imagePROGRAF iPF605",
        "Canon imagePROGRAF iPF610",
        "Canon imagePROGRAF iPF650",
        "Canon imagePROGRAF iPF655",
        "Canon imagePROGRAF iPF700",
        "Canon imagePROGRAF iPF710",
        "Canon imagePROGRAF iPF720",
        "Canon imagePROGRAF iPF750",
        "Canon imagePROGRAF iPF755",
      ],
      descricao:
        "Cartucho de tinta Canon PFI-102 Magenta pigmentado. Ideal para aplicações gráficas com riqueza de tons e nitidez.",
    },
    {
      id: 513,
      nome: "CARTUCHO CANON PFI-102 AMARELO",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/447858/cartucho_de_tinta_canon_pfi102_130ml_3587384_3_20190918102643.jpg",
      compatibilidade: [
        "Canon imagePROGRAF iPF500",
        "Canon imagePROGRAF iPF510",
        "Canon imagePROGRAF iPF600",
        "Canon imagePROGRAF iPF605",
        "Canon imagePROGRAF iPF610",
        "Canon imagePROGRAF iPF650",
        "Canon imagePROGRAF iPF655",
        "Canon imagePROGRAF iPF700",
        "Canon imagePROGRAF iPF710",
        "Canon imagePROGRAF iPF720",
        "Canon imagePROGRAF iPF750",
        "Canon imagePROGRAF iPF755",
      ],
      descricao:
        "Cartucho de tinta Canon PFI-102 Amarelo pigmentado. Cores vibrantes e durabilidade superior em impressões de alto nível.",
    },
    {
      id: 29,
      nome: "CARTUCHO HP 664XL",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/F/6/F6V31AB-1_T1680778875.png",
      compatibilidade: [
        "HP Deskjet Ink Advantage 1115",
        "HP Deskjet Ink Advantage 2136",
        "HP Deskjet Ink Advantage 3636",
        "HP Deskjet Ink Advantage 3836",
        "HP Deskjet Ink Advantage 4536",
        "HP Deskjet Ink Advantage 3635",
        "HP Deskjet Ink Advantage 3776",
        "HP Deskjet Ink Advantage 3788",
        "HP Deskjet Ink Advantage 3790",
        "HP Deskjet Ink Advantage 2676",
        "HP Deskjet Ink Advantage 3786",
        "HP Deskjet Ink Advantage 5076",
        "HP Deskjet Ink Advantage 5276",
        "HP Deskjet Ink Advantage 4676",
      ],
      descricao:
        "Cartucho de tinta HP 664XL com alto rendimento. Ideal para quem busca economia e qualidade de impressão.",
    },
    {
      id: 30,
      nome: "CARTUCHO HP 664XL Colorido",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/F/6/F6V30AB-1_T1680778867.png",
      compatibilidade: [
        "HP Deskjet Ink Advantage 1115",
        "HP Deskjet Ink Advantage 2136",
        "HP Deskjet Ink Advantage 3636",
        "HP Deskjet Ink Advantage 3836",
        "HP Deskjet Ink Advantage 4536",
        "HP Deskjet Ink Advantage 3635",
        "HP Deskjet Ink Advantage 3776",
        "HP Deskjet Ink Advantage 3788",
        "HP Deskjet Ink Advantage 3790",
        "HP Deskjet Ink Advantage 2676",
        "HP Deskjet Ink Advantage 3786",
        "HP Deskjet Ink Advantage 5076",
        "HP Deskjet Ink Advantage 5276",
        "HP Deskjet Ink Advantage 4676",
      ],
      descricao:
        "Cartucho de tinta HP 664XL colorido de alto rendimento. Perfeito para quem precisa imprimir com cores vivas, qualidade e economia.",
    },
    {
      id: 31,
      nome: "CARTUCHO HP 662XL PRETO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/C/Z/CZ105AB-1_T1680778641.png",
      compatibilidade: [
        "HP Deskjet Ink Advantage 1015",
        "HP Deskjet Ink Advantage 1510",
        "HP Deskjet Ink Advantage 1518",
        "HP Deskjet Ink Advantage 2516",
        "HP Deskjet Ink Advantage 2546",
        "HP Deskjet Ink Advantage 2646",
        "HP Deskjet Ink Advantage 3516",
        "HP Deskjet Ink Advantage 3546",
        "HP Deskjet Ink Advantage 4645",
        "HP Deskjet Ink Advantage 2510",
        "HP Deskjet Ink Advantage 2540",
        "HP Deskjet Ink Advantage 2548",
        "HP Deskjet Ink Advantage 3510",
        "HP Deskjet Ink Advantage 3540",
        "HP Deskjet Ink Advantage 4515",
        "HP Deskjet Ink Advantage 4646",
        "HP Deskjet Ink Advantage 1016",
        "HP Deskjet Ink Advantage 1516",
        "HP Deskjet Ink Advantage 2515",
        "HP Deskjet Ink Advantage 2545",
        "HP Deskjet Ink Advantage 2645",
        "HP Deskjet Ink Advantage 3515",
        "HP Deskjet Ink Advantage 3545",
        "HP Deskjet Ink Advantage 4640",
        "HP Deskjet Ink Advantage 4648",
      ],
      descricao:
        "CARTUCHO HP 662XL com tinta de qualidade para impressões nítidas e confiáveis no dia a dia.",
    },
    {
      id: 32,
      nome: "CARTUCHO HP 662XL COLORIDO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/C/Z/CZ106AB-1_T1680778646.jpg",
      compatibilidade: [
        "HP Deskjet Ink Advantage 1015",
        "HP Deskjet Ink Advantage 1510",
        "HP Deskjet Ink Advantage 1518",
        "HP Deskjet Ink Advantage 2516",
        "HP Deskjet Ink Advantage 2546",
        "HP Deskjet Ink Advantage 2646",
        "HP Deskjet Ink Advantage 3516",
        "HP Deskjet Ink Advantage 3546",
        "HP Deskjet Ink Advantage 4645",
        "HP Deskjet Ink Advantage 2510",
        "HP Deskjet Ink Advantage 2540",
        "HP Deskjet Ink Advantage 2548",
        "HP Deskjet Ink Advantage 3510",
        "HP Deskjet Ink Advantage 3540",
        "HP Deskjet Ink Advantage 4515",
        "HP Deskjet Ink Advantage 4646",
        "HP Deskjet Ink Advantage 1016",
        "HP Deskjet Ink Advantage 1516",
        "HP Deskjet Ink Advantage 2515",
        "HP Deskjet Ink Advantage 2545",
        "HP Deskjet Ink Advantage 2645",
        "HP Deskjet Ink Advantage 3515",
        "HP Deskjet Ink Advantage 3545",
        "HP Deskjet Ink Advantage 4640",
        "HP Deskjet Ink Advantage 4648",
      ],
      descricao:
        "CARTUCHO HP 662XL com tinta de qualidade para impressões nítidas e confiáveis no dia a dia.",
    },
    {
      id: 33,
      nome: "CARTUCHO HP 954XL PRETO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/L/0/L0S71AB-1_T1680779434.png",
      compatibilidade: [
        "Officejet Pro 8700",
        "Officejet Pro 8710",
        "Officejet Pro 8715",
        "Officejet Pro 7720",
        "Officejet Pro 7740",
        "Officejet Pro 8720",
        "Officejet Pro 8716",
        "Officejet Pro 8725",
        "Officejet Pro 8210",
        "Officejet Pro 8740",
        "Officejet Pro P27724DW",
      ],
      descricao:
        "Cartucho de tinta HP 954XL de alta capacidade. Impressões com cores nítidas e vibrantes em documentos empresariais.",
    },
    {
      id: 34,
      nome: "CARTUCHO HP 954XL CIANO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/L/0/L0S62AB-1_T1680779414.png",
      compatibilidade: [
        "Officejet Pro 8700",
        "Officejet Pro 8710",
        "Officejet Pro 8715",
        "Officejet Pro 7720",
        "Officejet Pro 7740",
        "Officejet Pro 8720",
        "Officejet Pro 8716",
        "Officejet Pro 8725",
        "Officejet Pro 8210",
        "Officejet Pro 8740",
        "Officejet Pro P27724DW",
      ],
      descricao:
        "Cartucho HP 954XL na cor CIANO. Alta capacidade e qualidade profissional para impressões com tons vivos e duradouros.",
    },
    {
      id: 35,
      nome: "CARTUCHO HP 954XL MAGENTA",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/L/0/L0S65AB-1_T1680779421.png",
      compatibilidade: [
        "Officejet Pro 8700",
        "Officejet Pro 8710",
        "Officejet Pro 8715",
        "Officejet Pro 7720",
        "Officejet Pro 7740",
        "Officejet Pro 8720",
        "Officejet Pro 8716",
        "Officejet Pro 8725",
        "Officejet Pro 8210",
        "Officejet Pro 8740",
        "Officejet Pro P27724DW",
      ],
      descricao:
        "Cartucho HP 954XL na cor MAGENTA. Ideal para impressões com cores intensas e excelente definição em materiais empresariais.",
    },
    {
      id: 36,
      nome: "CARTUCHO HP 954XL AMARELO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/L/0/L0S68AB-1_T1680779427.png",
      compatibilidade: [
        "Officejet Pro 8700",
        "Officejet Pro 8710",
        "Officejet Pro 8715",
        "Officejet Pro 7720",
        "Officejet Pro 7740",
        "Officejet Pro 8720",
        "Officejet Pro 8716",
        "Officejet Pro 8725",
        "Officejet Pro 8210",
        "Officejet Pro 8740",
        "Officejet Pro P27724DW",
      ],
      descricao:
        "Cartucho HP 954XL na cor amarela. Rendimento elevado com qualidade superior para gráficos, tabelas e documentos coloridos.",
    },
    {
      id: 37,
      nome: "CARTUCHO HP 964XL PRETO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/3/J/3JA57AL-1_T1680771940.png",
      compatibilidade: ["HP OfficeJet Pro 9010", "HP OfficeJet Pro 9020"],
      descricao:
        "Cartucho HP 964XL com tecnologia de tinta pigmentada para impressões duradouras e resistentes à água.",
    },
    {
      id: 38,
      nome: "CARTUCHO HP 964XL CIANO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/3/J/3JA54AL-1_T1680771928.png",
      compatibilidade: ["HP OfficeJet Pro 9010", "HP OfficeJet Pro 9020"],
      descricao:
        "Cartucho HP 964XL na cor CIANO, com tinta pigmentada que garante impressões vívidas, duráveis e resistentes à água.",
    },
    {
      id: 349,
      nome: "CARTUCHO HP 964XL MAGENTA",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/3/J/3JA55AL-1_T1680771932.png",
      compatibilidade: ["HP OfficeJet Pro 9010", "HP OfficeJet Pro 9020"],
      descricao:
        "Cartucho HP 964XL na cor MAGENTA, ideal para impressões com cores intensas e resistência à água e ao desbotamento.",
    },
    {
      id: 40,
      nome: "CARTUCHO HP 964XL AMARELO",
      imagem:
        "https://br-media.hptiendaenlinea.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/3/J/3JA56AL-1_T1680771936.png",
      compatibilidade: ["HP OfficeJet Pro 9010", "HP OfficeJet Pro 9020"],
      descricao:
        "Cartucho HP 964XL na cor amarela, com alto rendimento e excelente definição para gráficos e imagens coloridas.",
    },
  ];

  listaDeCilindros = [
    {
      id: 3,
      nome: "CARTUCHO DE CILINDRO HP CE314A",
      imagem:
        "https://www.acessoshop.com.br/image/cache//catalog/product/CE314A-700x700.jpg?mode=contain",
      compatibilidade: ["HP CP1025", "HP CP1025nw"],
      descricao:
        "Cilindro de imagem HP CE314A essencial para o funcionamento eficiente das impressoras HP CP1025.",
    },
    {
      id: 13,
      nome: "CILINDRO BROTHER DRB021",
      imagem:
        "https://www.brother.com.br/-/media/brother/product-catalog-media/images/2021/04/12/07/26/drb021_0.png",
      compatibilidade: [
        "Brother DCP-7520DW",
        "Brother DCP-7535DW",
        "Brother DCP-B7650DW",
        "Brother HL-B2080DW",
      ],
      descricao:
        "Cilindro Brother DR-B021 para impressoras e multifuncionais da linha B, garantindo imagens nítidas e durabilidade.",
    },
    {
      id: 14,
      nome: "CILINDRO BROTHER DR1060",
      imagem:
        "https://www.brother.com.br/-/media/brother/product-catalog-media/images/2021/03/18/08/12/dr-1060.png",
      compatibilidade: [
        "Brother HL1112",
        "Brother HL1202",
        "Brother DCP1602",
        "Brother DCP1512",
        "Brother HL1212W",
        "Brother DCP1612NW",
        "Brother DCP1610",
      ],
      descricao:
        "Unidade fotocondutora Brother DR1060 usada com o toner TN1060. Essencial para alta performance de impressão.",
    },
    {
      id: 15,
      nome: "CILINDRO BROTHER DR2340",
      imagem:
        "https://www.brother.com.br/-/media/brother/product-catalog-media/images/2022/02/01/10/40/dr2340.png",
      compatibilidade: [
        "Brother HL-L2320D",
        "Brother HL-L2360DW",
        "Brother MFC-L2740DW",
        "Brother MFC-L2720DW",
        "Brother MFC-L2700DW",
        "Brother DCP-L2520DW",
        "Brother DCP-L2540DW",
      ],
      descricao:
        "Cilindro DR-2340 para multifuncionais e impressoras Brother. Alta confiabilidade para grandes volumes.",
    },
    {
      id: 16,
      nome: "CILINDRO BROTHER DR3440",
      imagem:
        "https://www.brother.com.br/-/media/brother/product-catalog-media/images/2021/03/18/08/15/dr3440_front_featuredimagery_0.png",
      compatibilidade: [
        "Brother HL-L6202DW",
        "Brother HL-L5102DW",
        "Brother HL-L5202DW",
        "Brother HL-L6402DW",
        "Brother DCP-L5652DN",
        "Brother DCP-L5502DN",
        "Brother DCP-L5602DN",
        "Brother MFC-L5702DW",
        "Brother MFC-L5902DW",
        "Brother MFC-L6702DW",
        "Brother MFC-L5802DW",
        "Brother MFC-L6902DW",
      ],
      descricao:
        "Unidade de imagem DR3440 para uso em impressoras Brother profissionais. Alto rendimento e precisão.",
    },
    {
      id: 111,
      nome: "CILINDRO BROTHER DR3440 - COMPATÍVEL",
      imagem:
        "https://cdn.awsli.com.br/600x700/1094/1094078/produto/4289915745619b085b.jpg",
      compatibilidade: [
        "Brother DCP-L5500DN",
        "Brother DCP-L5600DN",
        "Brother DCP-L5650DN",
        "Brother HL-L5000D",
        "Brother HL-L5100DN",
        "Brother HL-L5200DW",
        "Brother HL-L6200DW",
        "Brother HL-L6400DW",
        "Brother MFC-L5700DW",
        "Brother MFC-L5800DW",
        "Brother MFC-L6900DW",
      ],
      descricao:
        "Unidade de imagem DR-3440 compatível para ambientes de alto volume, com rendimento e qualidade elevados.",
    },
    {
      id: 112,
      nome: "CILINDRO BROTHER DR2340 - COMPATÍVEL",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/1370621/cartucho_de_cilindro_brother_dr2340_dr660_dr2370_para_toner_tn2370_compativel_12k_483_1_4b8bdd7bfbdbeeb55a4405cc4fd8f401.jpg",
      compatibilidade: [
        "Brother HL-L2320D",
        "Brother HL-L2360DW",
        "Brother DCP-L2520DW",
        "Brother DCP-L2540DW",
        "Brother MFC-L2700DW",
        "Brother MFC-L2720DW",
        "Brother MFC-L2740DW",
      ],
      descricao:
        "Unidade de cilindro DR-2340 compatível com impressoras de escritório populares, com rendimento padrão.",
    },
    {
      id: 113,
      nome: "CILINDRO BROTHER DR1060 - COMPATÍVEL",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/406359/cartucho_de_cilindro_compativel_para_brother_dr1060_evolut_para_dcp_1617nw_hl_1212w_hl_1210w_dcp_161_8037_4_bee32070f32387e40b6b12888be1eb1c.jpg",
      compatibilidade: [
        "Brother HL-1112",
        "Brother HL-1202",
        "Brother HL-1212W",
        "Brother DCP-1510",
        "Brother DCP-1512",
        "Brother DCP-1602",
        "Brother DCP-1610W",
        "Brother DCP-1617NW",
      ],
      descricao:
        "Unidade de cilindro DR-1060 compatível, com rendimento aproximado de 10 000 páginas e boa durabilidade.",
    },
    {
      id: 114,
      nome: "CILINDRO BROTHER DR720 - COMPATÍVEL",
      imagem:
        "https://tecmasternet.com/wp-content/uploads/2023/02/Cilindro-Fotocondutor-Brother-DR750-DR720-Evolut-13.jpg",
      compatibilidade: [
        "Brother DCP-8110DN",
        "Brother DCP-8150DN",
        "Brother DCP-8155DN",
        "Brother HL-5440D",
        "Brother HL-5450DN",
        "Brother HL-5470DW",
        "Brother HL-6180DW",
        "Brother MFC-8510DN",
        "Brother MFC-8710DW",
        "Brother MFC-8910DW",
        "Brother MFC-8950DW",
      ],
      descricao:
        "Unidade de cilindro DR-720 original, ideal para impressões de alto volume com rendimento estimado em cerca de 30 000 páginas.",
    },
    {
      id: 115,
      nome: "CILINDRO BROTHER DRB021 - COMPATÍVEL",
      imagem:
        "https://tecmasternet.com/wp-content/uploads/2023/02/Cilindro-Fotocondutor-Brother-DRB021-Evolut-17.jpg",
      compatibilidade: [
        "Brother HL-B2000D",
        "Brother HL-B2080DW",
        "Brother DCP-B7500D",
        "Brother DCP-B7535DW",
        "Brother MFC-B7715DW",
      ],
      descricao:
        "Unidade de imagem DR-B021 compatível com série B, rendimento de aproximadamente 12 000 páginas.",
    },
    {
      id: 116,
      nome: "CILINDRO BROTHER DR420 - COMPATÍVEL",
      imagem:
        "https://www.toptonernet.com.br/storage/empresas/08863077000105/produtos/49VPapkmfpAaaYL8Ny0ow4udutmsPLXmZnqCQPbQ_principal.jpeg",
      compatibilidade: [
        "Brother DCP-7060D",
        "Brother DCP-7065DN",
        "Brother HL-2130",
        "Brother HL-2240",
        "Brother HL-2270DW",
        "Brother MFC-7365DN",
        "Brother MFC-7860DW",
        "Brother IntelliFAX-2840",
        "Brother IntelliFAX-2940",
      ],
      descricao:
        "Unidade de cilindro DR-420 compatível, rendimento de cerca de 12 000 páginas, ideal para uso doméstico e escritórios.",
    },
    {
      id: 117,
      nome: "CILINDRO BROTHER DR620 - COMPATÍVEL",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/1146605/90_fotocondutor_dr520_dr620_dr_520_620_evolut_compativel_com_brother_8085_8080_1533_1_627171dd4773261bfea74f462a92ea8f.jpg",
      compatibilidade: [
        "Brother DCP-8080DN",
        "Brother DCP-8085DN",
        "Brother HL-5340D",
        "Brother HL-5370DW",
        "Brother MFC-8480DN",
        "Brother MFC-8890DW",
        "Brother MFC-8680DN",
      ],
      descricao:
        "Unidade de imagem DR-620 compatível, rendimento de até 25 000 páginas, excelente para ambientes empresariais.",
    },
  ];

  get produtosFiltrados() {
    let listaSelecionada = [];

    switch (this.categoriaSelecionada) {
      case "toners":
        listaSelecionada = this.listaDeToners;
        break;
      case "cartuchos":
        listaSelecionada = this.listaDeCartuchos;
        break;
      case "fotocondutores":
        listaSelecionada = this.listaDeCilindros;
        break;
    }
    return listaSelecionada.filter((produto) =>
      produto.nome.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}
