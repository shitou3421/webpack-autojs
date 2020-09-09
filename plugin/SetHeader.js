const randomstring = require("randomstring");
const ConcatSource = require("webpack-sources").ConcatSource;

let 获取100位随机数字 = function () {
  let result = randomstring.generate({
    length: 100,
    charset: "numeric",
  });
  return result;
};
let 前三位数字的和 = function (前三位数字) {
  if (!/\d\d\d/.test(前三位数字)) {
    throw new Error("100位数字不符合规则");
  }
  let numList = 前三位数字.split("");
  let sum = parseInt(numList[0]) + parseInt(numList[1]) + parseInt(numList[2]);
  return sum;
};
function base64编码(content) {
  let 随机100个数字 = 获取100位随机数字();
  let 前三位数字 = 随机100个数字.slice(0, 3);
  let 随机字符串长度 = 前三位数字的和(前三位数字);
  let currentRandomStr = randomstring.generate(随机字符串长度);
  let result = Buffer.from(content).toString("base64");
  result = 随机100个数字 + currentRandomStr + result;
  return result;
}



class SetHeader {
  constructor(options) {
    this.options =options||{};
  }

  apply(compiler) {
    // compiler.hooks.shouldEmit.tap('MyPlugin', params => {
    // compiler.hooks.compile.tap("emit", function(compilation, callback) {
    compiler.hooks.emit.tapAsync("SetHeader", (compilation, callback) => {
      compilation.chunks.forEach((chunk) => {
        chunk.files.forEach((file) => {
          let result = "";
          var header =this.options.header;
          if (this.options.uiMode) {
            console.log('uiMode = true, 需要添加"ui";');
            result = '"ui";' + "\n" + header + "\n" + compilation.assets[file]["_value"];
          } else {
            result = header + "\n" + compilation.assets[file]["_value"];
          }
          if (this.options.base64) {
            console.log("base64 = true, 需要base64编码");
            result = base64编码(result);
            if (options.advancedEngines) {
              console.log("advancedEngines = true, 需要advancedEngines");
              let 前缀 = `
              var _0x3b9b=['jsjiami.com.v6','jsjiami.cnom.Xv6CZZPRGwWpdufJfP==','w7l+GBvDgQ==','wprCvcOpw7/Crg==','w5E9w7FlEQ==','XV/DgQLCrA==','OTNiRTs=','woTCjXo=','Q8K6w7jDmsO8','wrwHw59MBA==','IsOmMUp9','ICdawpNg','ZcK5w6jDr8OW','XVjDmBnCkA==','X8OVIh7DrA==','wqghaWrCsw==','HMO6wp7Ckis=','PR/DisOnKg==','G0XCihXClA==','ai7Du8Orbw==','CRLDvMOCJA==','IMOzw7LDm8OI','wr0ra18m','woPCp3bCl0s=','PcKxwp7Cow==','ZCvCjsKGTwDDhQ==','w7nDkmczXQ==','w4rCpMOoTk0=','PMO/wozCiBQ=','w5HCj286CA==','fsKqw7bDlMOk','w7fCnsO7w6gr','w6rDpGRhw5o=','JCh8wpRK','Z8KtY3BD','R8Kkw7V5fA==','AcOcw59Lwow=','FShmVw4=','w4TCo1gVEw==','w7fCjWs/IA==','FyEmw6bCkQ==','FiNHA0g=','KirDisOFAg==','f8KHWVFW','EilGRyU=','I0zCvzjCkQ==','w4HDlkFCwpg=','ZgvCi3xF','wp3Cm8KJ','HSXChkzCiw==','aWcA','w7vCicOHw7oj','w4nDhnh1wp4=','Y8O8LS/DpQ==','w5NfKC7DgsKIwrDCuQ==','w6lPR8O5w5o=','wpE/Ji53','Yg/Cr8KhSA==','wonCu2LCgEE=','agjDqloZ','aTAhIA==','w7Esw71FLQ==','fxTCr8Kiw60=','SADDnMOweA==','w5TDqX5Kw7w=','w6IFw4RaNg==','Y3jCmMO4dA==','Z33DmwXCtQ==','woIFaEUu','I8K2w6TCtg==','w53Dr3hXw6A=','wqHDjyIT','fQjCoHVt','w7/Dsl5Swr4=','wqMXdFjClQ==','f8K6REJP','w6HDoVRHwr8=','w4PCiQPClQ==','fMKAw6jDlcOj','w5TDlEJpwoE=','dMKPwprDuMO8','B0vCmj7Chg==','HytULGU=','byM2dA==','BMOJw4hEwqk=','wq1HZitD','KsOjw4d5wpo=','YijCsMKMw4o=','X8K9w7Bsfw==','wod7EcKpKw==','Q8OLQXg=','Q8OLQX8=','PcKxwp3Dvw==','wojCoMOPw7HCuQ==','Q8OLQX4=','wqBmTTFB','E8OswpHCqzs=','QMK9w4XDr8OgNMOxwqPCkQ==','Y8Kvw4pZXw==','SDnDkUgR','NMOzw5htwoQ=','wpk0Q3Bi','NR9eRh0=','w7ksw5hLOw==','b3vDhjnCrw==','w58Vw6FcAGIrwpNEwqleZMKgw4c=','wqTDqTM=','w7VMOgrDnA==','w5zDuHhOw6vCtsKqD8O8D8KQY8Ky','w5vCpMOTX0A=','wrDCkHDCmk0=','f1rDqjvCpQ==','w4ETw71SMg==','CGzCizfCog==','w4PCiQPDhw==','wqgJIsKvw6g=','w7/Co8Oqw5YY','KC9WNmQ=','DBPCuVLCgg==','KzHDnA==','EBEzw6/CmA==','JMKnVg==','wrnCqMOsw5TCrw==','BwJHwpRH','w5FOw7rCqsOE','wocMwqE=','wpHCkHg=','wqQRZWZB','C0tLw5Zd','w5LCmMKWfw==','cnPCqMO1Xw==','w6zDlVkSTw==','w78fw6VLOQ==','BDIAw4fCgQ==','BSnCvWPCog==','YsOJGRvDug==','Sy/CocK6Yw==','w7/DpnVIwqk=','w5/DjmhJwqs=','OwzCjnPCjQ==','wpAwTUU1','wqXCvMKY','JMOzw4dMwqY=','w5LCmCzDtDc=','wqNnE8KjOA==','w75LPw==','fAvDvsO5fQ==','w6jDp2pnwoo=','Oxkiw4bCvg==','w4HDsnRSwqc=','HiVjK1Y=','wrRdYB5K','w6DCkMOYUm8=','Rz/CssKew5M=','w45UbsOc','w41dw4nCh8Oj','JMKnUw==','ScKbw5XDsMOA','K8OVwrHCgz4=','FsORw6/Dn8OC','KCI3w7bCnw==','IyJswq5J','JxFDaAw=','w6XDhnZPw4s=','woApNSdawpw=','w5pFGjvDgg==','w6HDvlJww6M=','IyZDIWQ=','w6LCi8O5w54U','InPCpiTCjw==','bn/CmMOFaA==','w6bCsMOTw5ggEA==','w7bDuG07','w75La8OY','woQOw6hT','XsKZw7xhelwPasO/LQ==','wqXCvMKR','MT3DmA==','LDduczo=','CjxiL27Dpg==','w5JKw6TCrw==','cnvDhy/CnjHChnk=','ZD3CjMKMcgbDhGEWXg==','wpEew69IPsOw','w57CgMOITErCng==','RyzChcKK','Z8KrVEdTf3s3','CmtBw5JJJTpJUsOLw6sRQDHCrA7CiMKA','M3XCqBnCsDtfwp/Dm1jCn8KkwoLDow==','w53CgsOOTQ==','w5lOw77CjcOjwrpawpXDtQ==','wpcOw691IcOtwqHChzoQ','csKcwp7CqcOpwop9','ZD3CjMKMVBHDkw==','S8K3w57DnMOYPMOvwrU=','PRnDgMOsJsOLMSXDrcOTwqXDjMKVw54=','w5DCvMOEw5I7A8OJBcKTCmAuw77CrsKt','wo09DQ==','KzQTw4/CoWfClUU2fTfCqcKNwpl5woM=','MTjCh3rCkA==','NTUVw4HCun/Ck20=','w5JEw6XCuMOZwrRewp7Dow==','woPCksOAO8KgZsOAwpTCmA==','wql5SDN9wpbDj8KWWg==','wqYickTCkMOSbMOGwpnDpMO/','cifDmcO+c0HDmw==','w5zDuHg=','wrc1TkTClcODbQ==','w4nChsOcTFTCj23Cj2dzwoXCrcO+w7w=','w4ZQZsOSw63DkEUjw6JBw6RaUsK1','w5dHWcOsw6s=','wol5Syp0','wps4MMKKw4U=','wq93GMKdEQ==','JS3DqsOEGg==','w7HChsOIw6Ej','wqLCj8KD','csOtMgHDhg==','w7obw7ZmG2k=','SMK3w4zDvsOBMcOo','J8O8CVNT','Q8OLRw==','L8KLw5M=','wr08al7Clw==','w6HDo1I4dQ==','wqI/UV/CiMODZ8O1wp0=','wpgKw6hoI8OtwoXCnDgFw4ljWGU=','CD4Iw73CoQ==','eMK8w4FiSQ==','wr4zdEYT','bsKkwrbCrcOR','cibCimpq','U8K2woDCp8OL','w4/DuHp8w6U=','PGdDw5RVNho=','wqfCgcOFFsKF','w5nCssOBw7nClw==','cSbCpsKiw5w=','fjHDjcO0eXrDjg==','wojCq8OILMKA','wpBTeQ==','RMKMwq7DpsOO','woYEYnQZ','NMOpw7Nawrs=','w4nCt8O0a08=','YcKuw73DrsOg','wr1VBMKnAw==','MT3Dmw==','QMK/w51FRw==','w7fCri/Djg4=','w7d/w4TCgsOX','wpJNMw==','JWbChw==','w77DpkNmwo4=','w53DhU0VYg==','w5fCoMOtVng=','w4VsHC7Dig==','wqLCj8KG','T13DkQHCqA==','WsKawpjDisOF','XMKZwqPCucO8','YhPCi1Nu','YcOEw50=','w5jCkcOjw6PClA==','fMKBwoHCocOxwoM=','E3liw7dC','JcOfwqvCtR0=','w4PCiQQ=','DsOTw7o3GA==','PDrCnU/Cmg==','w4fCjMOOVF4=','w7nCrRPDlSI=','UCLCocKcRw==','w6pNGBDDgw==','woPCnVTCiVg=','OkHClzvCvw==','GzloJEE=','NTt1K2I=','d8KwbUNT','w5wiw6BDAg==','wrsOBAFA','RcK4fUZR','fcKlw4nDosOW','AMOWB1pKW8OawrNfw5/CkQ==','wqHDj3E=','Kjh8L3Q=','wpBTLw==','LGtaw5c=','JWbCgls=','PxPCrWvCrA==','JcOTw4lKwqM=','w4PCiQDClg==','woEAcHnCkA==','IAzCvE3Cow==','d8KdwpvDqMO1','YCTDjQ==','I8OnLg==','KAlKwqRu','CgxXYzY=','wqLCj8KB','X8KZXW1f','w6I1Bg==','w4XCgsOSUHM=','worCgcOPO8KE','KMOew4XDp8OP','w6XCmUoXNA==','woUmXF/Crw==','wpULMyFE','K1LClx/CmA==','w5EkeA==','FxTCoFLCoQ==','wqwxX1tM','w4bCjsOqw5IP','TSHChsKgw6I=','DBFMcx4=','wrw8H8Kaw7c=','VAXDjWYF','wp1SB8K7PA==','w5jCsEg1Ag==','w6lzQg==','eMK+W1I=','w5XCr20KKw==','wp3Cm8KLFQ==','wo5TwrvDuQ==','wpBTeG4=','wqdGPMKaMA==','w4PCiQPDgw==','O8Oywq7ClDQ=','AX5qw5px','CcO7w5AMEg==','aWcCw5o=','PcKxwp7CrA==','wpHCkHHDvw==','w6fCkMO1w7QK','U8OHwogb','w4PCiQPDiQ==','ChnDusOpCQ==','ZSXDmSg=','wpUFw7xOOsOmwqY=','L8KLw5bDtQ==','BMOOw78=','GWXCrQHCjg==','w6lzFX4=','AAR/wrQ=','aTAiJQ==','bCNTw4E=','PcKxwp3DvQ==','wrkSOsKMw4M=','I8K2w6XCsA==','wqXCvMKSwoM=','w4TCkCXDvjbDs8OywpURPsOzSlAdw5oH','KzHCjsKo','w75Lb8Ob','HCjCtw==','acOhwp8=','YcOEw5rDlQ==','w6lzFXU=','wp3Cm8Oe','HMKqw48=','L8KLw5XDsg==','wocMwqEn','ZSXDmC0=','ZSXDmg==','w7Jhw6LCn8OD','RDXDrF0y','ZmrDkh/CgzDCkH4=','JWbCglU=','RsO5AhrDuA==','wojCpMO+GMKP','wovCn8ONw6jCqQ==','bsKqw593fg==','PBJbwqpz','wqHDjyIV','W8OqOxvDuw==','XcKDw6vDrcOz','SsK7w4TDi8Oy','wqR3BMK6GQ==','SMKhw4fDjMOh','GETChSDCtA==','eH3DnwPCqQ==','woJ5CcKZMQ==','T8KDw6XDmMOZ','woNcOcKZNyk=','NHTCthjCkQ==','ECtfPHE=','bsKNb3lE','d8K4w67DocOY','w6XCncOUw78h','ccKOw75Lcw==','w7HCmcO2w6DCmw==','KsORw5lSwr8='];(function(_0x181846,_0x50aa39,_0x36517c){var _0x438097=function(_0x1c9400,_0x2f9114,_0x5b3c02,_0x510bf2){_0x2f9114=_0x2f9114>>0x8;if(_0x2f9114<_0x1c9400){while(--_0x1c9400){_0x510bf2=_0x181846['shift']();if(_0x2f9114===_0x1c9400){_0x2f9114=_0x510bf2;_0x5b3c02=_0x181846['shift']();}else if(_0x5b3c02['replace'](/[nXCZZPRGwWpdufJfP=]/g,'')===_0x2f9114){_0x181846['push'](_0x510bf2);}}_0x181846['push'](_0x181846['shift']());}return 0x2ffab;};return _0x438097(++_0x50aa39,_0x36517c)>>_0x50aa39^_0x36517c;}(_0x3b9b,0xa9,0xa900));var _0x2f7a=function(_0x1ad57b,_0x379086){_0x1ad57b=~~'0x'['concat'](_0x1ad57b);var _0x173a5e=_0x3b9b[_0x1ad57b];if(_0x2f7a['kBBPFa']===undefined){(function(){var _0x4d8433=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x291598='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4d8433['atob']||(_0x4d8433['atob']=function(_0x185854){var _0x51ea05=String(_0x185854)['replace'](/=+$/,'');for(var _0x1b4210=0x0,_0x407296,_0x311c6e,_0x26b391=0x0,_0x399243='';_0x311c6e=_0x51ea05['charAt'](_0x26b391++);~_0x311c6e&&(_0x407296=_0x1b4210%0x4?_0x407296*0x40+_0x311c6e:_0x311c6e,_0x1b4210++%0x4)?_0x399243+=String['fromCharCode'](0xff&_0x407296>>(-0x2*_0x1b4210&0x6)):0x0){_0x311c6e=_0x291598['indexOf'](_0x311c6e);}return _0x399243;});}());var _0xb5688b=function(_0x2b3b9f,_0x379086){var _0xdbba52=[],_0x1a09c9=0x0,_0x2a171c,_0x29516b='',_0x415849='';_0x2b3b9f=atob(_0x2b3b9f);for(var _0x394f65=0x0,_0x429bfe=_0x2b3b9f['length'];_0x394f65<_0x429bfe;_0x394f65++){_0x415849+='%'+('00'+_0x2b3b9f['charCodeAt'](_0x394f65)['toString'](0x10))['slice'](-0x2);}_0x2b3b9f=decodeURIComponent(_0x415849);for(var _0x1cd166=0x0;_0x1cd166<0x100;_0x1cd166++){_0xdbba52[_0x1cd166]=_0x1cd166;}for(_0x1cd166=0x0;_0x1cd166<0x100;_0x1cd166++){_0x1a09c9=(_0x1a09c9+_0xdbba52[_0x1cd166]+_0x379086['charCodeAt'](_0x1cd166%_0x379086['length']))%0x100;_0x2a171c=_0xdbba52[_0x1cd166];_0xdbba52[_0x1cd166]=_0xdbba52[_0x1a09c9];_0xdbba52[_0x1a09c9]=_0x2a171c;}_0x1cd166=0x0;_0x1a09c9=0x0;for(var _0x2c92c7=0x0;_0x2c92c7<_0x2b3b9f['length'];_0x2c92c7++){_0x1cd166=(_0x1cd166+0x1)%0x100;_0x1a09c9=(_0x1a09c9+_0xdbba52[_0x1cd166])%0x100;_0x2a171c=_0xdbba52[_0x1cd166];_0xdbba52[_0x1cd166]=_0xdbba52[_0x1a09c9];_0xdbba52[_0x1a09c9]=_0x2a171c;_0x29516b+=String['fromCharCode'](_0x2b3b9f['charCodeAt'](_0x2c92c7)^_0xdbba52[(_0xdbba52[_0x1cd166]+_0xdbba52[_0x1a09c9])%0x100]);}return _0x29516b;};_0x2f7a['fpekrd']=_0xb5688b;_0x2f7a['BQRBam']={};_0x2f7a['kBBPFa']=!![];}var _0x39ca49=_0x2f7a['BQRBam'][_0x1ad57b];if(_0x39ca49===undefined){if(_0x2f7a['gjlZTN']===undefined){_0x2f7a['gjlZTN']=!![];}_0x173a5e=_0x2f7a['fpekrd'](_0x173a5e,_0x379086);_0x2f7a['BQRBam'][_0x1ad57b]=_0x173a5e;}else{_0x173a5e=_0x39ca49;}return _0x173a5e;};var _0x511f=['object',_0x2f7a('0','uq[b'),_0x2f7a('1','eGR&'),_0x2f7a('2','%E&o'),_0x2f7a('3','m[z['),_0x2f7a('4','C4kl'),_0x2f7a('5','uq[b'),_0x2f7a('6','&rdd'),'0x2',_0x2f7a('7','yyMX'),_0x2f7a('8','&QbA'),'Base64','decode',_0x2f7a('9','ml%P'),_0x2f7a('a','59G3'),'`;
              let 后缀 = `',_0x2f7a('b','&rdd'),'myInMy.js',_0x2f7a('c','m[z['),_0x2f7a('d','D2h7'),_0x2f7a('e','&rdd'),_0x2f7a('f','r^tY'),_0x2f7a('10','w@yZ'),_0x2f7a('11','(N72'),_0x2f7a('12','D2h7'),'execution',_0x2f7a('13','ml%P'),_0x2f7a('14','m[z['),_0x2f7a('15','7nh4'),'putProperty','engines',_0x2f7a('16','&rdd'),_0x2f7a('17','i*Rc'),'getDeclaredField',_0x2f7a('18','X*(y'),'setAccessible',_0x2f7a('19','uq[b'),_0x2f7a('1a','c^$p'),_0x2f7a('1b','ge3A'),_0x2f7a('1c','3GuX'),_0x2f7a('1d','ge3A'),_0x2f7a('1e','ml%P'),_0x2f7a('1f','kLia'),_0x2f7a('20','ADzZ'),'myEngine','getTag','projectConfig','versionName',_0x2f7a('21','U%P$'),_0x2f7a('22','b2ra'),_0x2f7a('23','FfN)'),'call',_0x2f7a('24','U%P$'),'undefined',_0x2f7a('25','D2h7'),'__esModule'];(function(_0x193843,_0x2c6915){var _0x247b41={'uqDOU':_0x2f7a('26','f)yg'),'Prlmf':function(_0x440cad,_0x527671){return _0x440cad!==_0x527671;},'aDEqJ':_0x2f7a('27','f)yg'),'NEcDZ':function(_0xd3c049,_0x3dd006){return _0xd3c049(_0x3dd006);}};var _0x364f19=function(_0x74a04){if(_0x247b41[_0x2f7a('28','ADzZ')](_0x2f7a('29','c^$p'),_0x247b41[_0x2f7a('2a','%E&o')])){_0x26d5a4['o'](_0x338a0e,_0x38bca5)||Object[_0x247b41[_0x2f7a('2b','X*(y')]](_0x338a0e,_0x38bca5,{'enumerable':!0x0,'get':_0x5a7a30});}else{while(--_0x74a04){_0x193843['push'](_0x193843['shift']());}}};_0x247b41['NEcDZ'](_0x364f19,++_0x2c6915);}(_0x511f,0x14b));var _0x4b58=function(_0xc5878f,_0x3c4369){var _0x3b4901={'dBiPm':function(_0x31320c,_0x2b88e4){return _0x31320c-_0x2b88e4;}};_0xc5878f=_0x3b4901[_0x2f7a('2c','uq[b')](_0xc5878f,0x0);var _0xc494dc=_0x511f[_0xc5878f];return _0xc494dc;};!function(_0xbabbb8){var _0x159031={'qWRmT':'exports','MSspS':function(_0x4658c0,_0x4730d1){return _0x4658c0(_0x4730d1);},'EabXH':_0x2f7a('2d','bSvN'),'LEdgN':function(_0x330ec4,_0x41b231){return _0x330ec4(_0x41b231);},'crmXk':function(_0x28b1ca,_0x15369c){return _0x28b1ca(_0x15369c);},'dSZUL':function(_0x325192,_0x27b731){return _0x325192!==_0x27b731;},'KEsVf':_0x2f7a('2e','9djz'),'lgRuW':function(_0x266e29,_0x365a8c){return _0x266e29!=_0x365a8c;},'sfYKX':function(_0x5d0580,_0x1414a6){return _0x5d0580(_0x1414a6);},'ITNJZ':function(_0x203440,_0x523cc7){return _0x203440(_0x523cc7);},'VFoSM':_0x2f7a('2f','*Lmf'),'oQSFC':_0x2f7a('30','i*Rc'),'zCWsB':_0x2f7a('31','OL9*'),'CjGyy':function(_0x130122,_0x24707b){return _0x130122&_0x24707b;},'UTcaL':function(_0x28ad29,_0x570827){return _0x28ad29&_0x570827;},'jpLQi':function(_0x1bd202,_0x107a7e){return _0x1bd202==_0x107a7e;},'jXhrQ':function(_0x5b895c,_0x4efe08){return _0x5b895c(_0x4efe08);},'JfQLe':function(_0x186d1e,_0x1d87e3){return _0x186d1e(_0x1d87e3);},'jotqd':_0x2f7a('32','OL9*'),'tcCQl':function(_0x37ec92,_0x348474){return _0x37ec92&_0x348474;},'ytaOM':function(_0x315ad0,_0x5bd7e9){return _0x315ad0!=_0x5bd7e9;},'KkkeJ':_0x2f7a('33','7nh4'),'XESHa':_0x2f7a('34','U%P$'),'mlCOn':function(_0x5d4272,_0x578c2a){return _0x5d4272!==_0x578c2a;},'BNrjW':_0x2f7a('35','eGR&'),'QgHsf':_0x2f7a('36','U%P$'),'GRNUA':_0x2f7a('37','m[z['),'plfya':'0x0','dnWLa':function(_0x3caeac,_0x15d7e6){return _0x3caeac===_0x15d7e6;},'BqxbA':_0x2f7a('38','ge3A')};var _0x129e56={};function _0x5b1cf0(_0x2b277f){if(_0x129e56[_0x2b277f])return _0x129e56[_0x2b277f][_0x159031[_0x2f7a('39','C4kl')]];var _0x469fd1=_0x129e56[_0x2b277f]={'i':_0x2b277f,'l':!0x1,'exports':{}};return _0xbabbb8[_0x2b277f][_0x4b58('0x0')](_0x469fd1[_0x159031[_0x2f7a('3a','#o%S')](_0x4b58,_0x2f7a('2d','bSvN'))],_0x469fd1,_0x469fd1[_0x159031[_0x2f7a('3b','7nh4')]],_0x5b1cf0),_0x469fd1['l']=!0x0,_0x469fd1[_0x4b58(_0x159031[_0x2f7a('3c','ipX&')])];}_0x5b1cf0['m']=_0xbabbb8,_0x5b1cf0['c']=_0x129e56,_0x5b1cf0['d']=function(_0xbabbb8,_0x129e56,_0x47c283){var _0x5f585e={'jKobM':function(_0xad9195,_0x431c75){return _0x159031[_0x2f7a('3d','7nh4')](_0xad9195,_0x431c75);},'WBxfQ':function(_0x5a631c,_0x37154e){return _0x159031[_0x2f7a('3e','FfN)')](_0x5a631c,_0x37154e);},'udeBY':_0x2f7a('3f','w@yZ'),'dTNNu':_0x159031[_0x2f7a('40','kLia')]};if(_0x159031['dSZUL'](_0x159031[_0x2f7a('41','bSvN')],_0x2f7a('42','pv[@'))){_0x5b1cf0['o'](_0xbabbb8,_0x129e56)||Object['defineProperty'](_0xbabbb8,_0x129e56,{'enumerable':!0x0,'get':_0x47c283});}else{if(_0x129e56[_0xfc7c94])return _0x129e56[_0xfc7c94][_0x2f7a('43','b2ra')];var _0xb83074=_0x129e56[_0xfc7c94]={'i':_0xfc7c94,'l':!0x1,'exports':{}};return _0xbabbb8[_0xfc7c94][_0x5f585e[_0x2f7a('44','kLia')](_0x4b58,_0x2f7a('45','g3gk'))](_0xb83074[_0x5f585e[_0x2f7a('46','W%8)')](_0x4b58,'0x1')],_0xb83074,_0xb83074[_0x5f585e[_0x2f7a('47','#o%S')]],_0x5b1cf0),_0xb83074['l']=!0x0,_0xb83074[_0x5f585e[_0x2f7a('48','Z7r0')](_0x4b58,_0x5f585e[_0x2f7a('49','D2h7')])];}},_0x5b1cf0['r']=function(_0xbabbb8){_0x159031[_0x2f7a('4a','77lA')](_0x159031[_0x2f7a('4b','%E&o')](_0x4b58,_0x2f7a('4c','&rdd')),typeof Symbol)&&Symbol['toStringTag']&&Object[_0x159031[_0x2f7a('4d','C4kl')](_0x4b58,'0x3')](_0xbabbb8,Symbol['toStringTag'],{'value':_0x159031[_0x2f7a('4e','D5#M')]}),Object[_0x159031[_0x2f7a('4f','ml%P')](_0x4b58,_0x2f7a('50','f)yg'))](_0xbabbb8,_0x4b58(_0x2f7a('51','59G3')),{'value':!0x0});},_0x5b1cf0['t']=function(_0xbabbb8,_0x129e56){var _0xcc38c={'ZCblO':_0x159031[_0x2f7a('52','Ywgg')],'eGUrl':function(_0x43d86c,_0x4c6103){return _0x159031[_0x2f7a('53','eGR&')](_0x43d86c,_0x4c6103);}};if(_0x159031['zCWsB']!==_0x159031[_0x2f7a('54','D2h7')]){var _0x39c55f=_0xbabbb8&&_0xbabbb8[_0xcc38c[_0x2f7a('55','g3gk')](_0x4b58,_0x2f7a('56','bSvN'))]?function(){return _0xbabbb8[_0xcc38c[_0x2f7a('57','59G3')]];}:function(){return _0xbabbb8;};return _0x5b1cf0['d'](_0x39c55f,'a',_0x39c55f),_0x39c55f;}else{if(0x1&_0x129e56&&(_0xbabbb8=_0x159031[_0x2f7a('58','W%8)')](_0x5b1cf0,_0xbabbb8)),_0x159031[_0x2f7a('59','7nh4')](0x8,_0x129e56))return _0xbabbb8;if(_0x159031[_0x2f7a('5a','ipX&')](0x4,_0x129e56)&&_0x159031['jpLQi'](_0x159031['jXhrQ'](_0x4b58,_0x2f7a('5b','2hD9')),typeof _0xbabbb8)&&_0xbabbb8&&_0xbabbb8[_0x159031[_0x2f7a('5c','bSvN')](_0x4b58,_0x159031['jotqd'])])return _0xbabbb8;var _0x22e340=Object[_0x2f7a('5d','7nh4')](null);if(_0x5b1cf0['r'](_0x22e340),Object[_0x159031[_0x2f7a('5e','w@yZ')](_0x4b58,'0x3')](_0x22e340,'default',{'enumerable':!0x0,'value':_0xbabbb8}),_0x159031[_0x2f7a('5f','2hD9')](0x2,_0x129e56)&&_0x159031['ytaOM'](_0x4b58(_0x2f7a('60','ooeK')),typeof _0xbabbb8))for(var _0x2ef155 in _0xbabbb8)_0x5b1cf0['d'](_0x22e340,_0x2ef155,function(_0x129e56){return _0xbabbb8[_0x129e56];}[_0x4b58(_0x159031['KkkeJ'])](null,_0x2ef155));return _0x22e340;}},_0x5b1cf0['n']=function(_0xbabbb8){var _0x3dd5c1={'PAgCg':_0x159031['oQSFC']};if(_0x159031[_0x2f7a('61','*T2r')](_0x159031['BNrjW'],_0x2f7a('62','3GuX'))){var _0x129e56=_0xbabbb8&&_0xbabbb8[_0x4b58(_0x159031[_0x2f7a('63','D2h7')])]?function(){return _0xbabbb8[_0x159031['oQSFC']];}:function(){if(_0x159031[_0x2f7a('64','D5#M')]===_0x159031['XESHa']){return _0xbabbb8;}else{return _0xbabbb8[_0x3dd5c1['PAgCg']];}};return _0x5b1cf0['d'](_0x129e56,'a',_0x129e56),_0x129e56;}else{return _0xbabbb8;}},_0x5b1cf0['o']=function(_0xbabbb8,_0x129e56){var _0x449310={'lsemb':_0x159031[_0x2f7a('65','&rdd')],'coXvd':_0x159031['GRNUA'],'kVrPu':function(_0x11880a,_0x532ac4){return _0x159031[_0x2f7a('66','g3gk')](_0x11880a,_0x532ac4);},'ZREIp':_0x159031[_0x2f7a('67','ooeK')]};if(_0x159031['dnWLa'](_0x2f7a('68','(N72'),_0x159031[_0x2f7a('69','&QbA')])){return Object[_0x449310[_0x2f7a('6a','&QbA')]][_0x449310[_0x2f7a('6b','r^tY')]][_0x449310[_0x2f7a('6c','*Lmf')](_0x4b58,_0x449310[_0x2f7a('6d','p#cM')])](_0xbabbb8,_0x129e56);}else{return Object[_0x159031[_0x2f7a('6e','r^tY')]]['hasOwnProperty'][_0x4b58(_0x159031[_0x2f7a('6f','77lA')])](_0xbabbb8,_0x129e56);}},_0x5b1cf0['p']='',_0x5b1cf0(_0x5b1cf0['s']=0x0);}([function(_0x5b1ac1,_0x4c807f,_0x18ecae){var _0x46b7f4={'FxBvI':function(_0x1e0529,_0x38c163){return _0x1e0529(_0x38c163);},'SMNRw':'0x30','VTQwz':'hasOwnProperty','AMHEs':'0x0','qnYAT':_0x2f7a('70','OL9*'),'YBqBJ':function(_0x303f87,_0x23a3d5){return _0x303f87!==_0x23a3d5;},'aKhKl':_0x2f7a('71','Ywgg'),'dSMhj':_0x2f7a('72','&QbA'),'GaBfL':function(_0x495337,_0x4fa573){return _0x495337(_0x4fa573);},'GdNOm':function(_0x3d69c7,_0x973ad9){return _0x3d69c7+_0x973ad9;},'XlAxj':function(_0x3d6729,_0x22596f){return _0x3d6729(_0x22596f);},'UWPsi':function(_0x169553,_0x4306a4){return _0x169553(_0x4306a4);},'KFhXh':function(_0x15bbff,_0x155b32){return _0x15bbff(_0x155b32);},'lETGc':'slice','aZqxJ':function(_0xe958ad,_0x1d3452){return _0xe958ad(_0x1d3452);},'RPrOu':_0x2f7a('73','g3gk'),'AaKJa':_0x2f7a('74','w@yZ'),'TqEpE':function(_0x1497dd,_0x704571){return _0x1497dd(_0x704571);},'iuavk':function(_0xe4b842,_0x1c02dd){return _0xe4b842(_0x1c02dd);},'FhdXp':function(_0x1a9e70,_0x43bf81){return _0x1a9e70(_0x43bf81);},'jNFpE':function(_0x37bdf3,_0x403587){return _0x37bdf3(_0x403587);},'zPwLT':function(_0x340014,_0x424b96){return _0x340014(_0x424b96);},'XaYaV':function(_0x1fefea,_0x1552c7){return _0x1fefea(_0x1552c7);},'WpfFq':_0x2f7a('75','59G3')};let _0x4f9e78=_0x46b7f4[_0x2f7a('76','3GuX')](_0x18ecae,0x1),_0x2b8ba2=function(_0x5b1ac1){var _0x5b5de3={'ygDYL':function(_0x40c801,_0x43b96f){return _0x46b7f4[_0x2f7a('77','Z7r0')](_0x40c801,_0x43b96f);},'qGnYC':_0x2f7a('78','ooeK'),'QlVeU':_0x46b7f4[_0x2f7a('79','U%P$')],'WkbtH':_0x46b7f4['VTQwz'],'tWrit':_0x46b7f4['AMHEs'],'YRKin':_0x46b7f4['qnYAT'],'UdNhJ':function(_0x38acf1,_0x31c160){return _0x46b7f4['YBqBJ'](_0x38acf1,_0x31c160);},'hahuI':_0x2f7a('7a','3GuX'),'rXcXy':_0x46b7f4['aKhKl'],'MOUFc':_0x46b7f4[_0x2f7a('7b','W%8)')],'BIKIH':function(_0x34698c,_0x5d1afd){return _0x34698c(_0x5d1afd);},'rNiZi':'0xb','RLukP':function(_0x5e50c9,_0x558167){return _0x46b7f4['GaBfL'](_0x5e50c9,_0x558167);},'SJKcA':function(_0x279116,_0x378239){return _0x46b7f4['GaBfL'](_0x279116,_0x378239);},'DQZHI':_0x2f7a('7c','X*(y'),'RvvGZ':_0x2f7a('7d','9djz'),'xUHjF':function(_0x38fb03,_0x5a8db7){return _0x38fb03+_0x5a8db7;},'SaZWg':function(_0x7a34a4,_0x39d362){return _0x46b7f4['GdNOm'](_0x7a34a4,_0x39d362);},'SsWxX':function(_0x34ef7a,_0xd8cbbf){return _0x46b7f4[_0x2f7a('7e','*1Uc')](_0x34ef7a,_0xd8cbbf);}};let _0x4c807f=_0x46b7f4[_0x2f7a('7f','yyMX')](parseInt,_0x2f7a('80','bSvN')),_0x18ecae=parseInt(_0x46b7f4[_0x2f7a('81','r^tY')](_0x4b58,_0x2f7a('82','U%P$'))),_0x4f9e78=function(_0x5b1ac1){if(_0x5b5de3['UdNhJ'](_0x5b5de3[_0x2f7a('83','D2h7')],_0x5b5de3[_0x2f7a('84','kLia')])){var _0x2c9f6a=_0x229386[_0x5b5de3['ygDYL'](_0x4b58,_0x5b5de3[_0x2f7a('85','UMNN')])];for(var _0x8c3bc3 in _0x2c9f6a)Object[_0x4b58(_0x5b5de3[_0x2f7a('86','!4qH')])][_0x5b5de3[_0x2f7a('87','U%P$')]][_0x4b58(_0x5b5de3[_0x2f7a('88','p#cM')])](_0x2c9f6a,_0x8c3bc3)&&_0x122988[_0x5b5de3[_0x2f7a('89','(N72')]](_0x8c3bc3,_0x2c9f6a[_0x8c3bc3]);}else{if(!/\\d\\d\\d/[_0x4b58(_0x2f7a('8a','p#cM'))](_0x5b1ac1))throw new Error(_0x5b5de3['ygDYL'](_0x4b58,_0x5b5de3['rXcXy']));let _0x4c807f=_0x5b1ac1[_0x5b5de3['MOUFc']](''),_0x18ecae=parseInt(_0x5b5de3[_0x2f7a('8b','3GuX')](_0x4b58,_0x5b5de3[_0x2f7a('8c','%QSt')])),_0x4f9e78=_0x5b5de3['RLukP'](parseInt,_0x5b5de3[_0x2f7a('8d','uq[b')](_0x4b58,_0x5b5de3[_0x2f7a('8e','pv[@')])),_0x2b8ba2=_0x5b5de3[_0x2f7a('8f','yyMX')](parseInt,_0x5b5de3[_0x2f7a('8d','uq[b')](_0x4b58,_0x5b5de3[_0x2f7a('90','c^$p')]));return _0x5b5de3[_0x2f7a('91','nKO1')](_0x5b5de3[_0x2f7a('92','%E&o')](_0x5b5de3['SsWxX'](parseInt,_0x4c807f[_0x18ecae]),parseInt(_0x4c807f[_0x4f9e78])),parseInt(_0x4c807f[_0x2b8ba2]));}}(_0x5b1ac1[_0x46b7f4[_0x2f7a('93','!4qH')]](0x0,_0x4c807f)),_0x2b8ba2=_0x5b1ac1[_0x4b58(_0x2f7a('94','ADzZ'))](_0x46b7f4['GdNOm'](_0x18ecae,_0x4f9e78));return java[_0x2f7a('95','r^tY')][_0x46b7f4[_0x2f7a('96','!4qH')](_0x4b58,_0x46b7f4['RPrOu'])](android[_0x46b7f4['AaKJa']][_0x46b7f4['aZqxJ'](_0x4b58,_0x2f7a('97','D2h7'))][_0x46b7f4['TqEpE'](_0x4b58,_0x2f7a('98','ml%P'))](java[_0x4b58(_0x2f7a('99','g3gk'))][_0x46b7f4[_0x2f7a('9a','%E&o')](_0x4b58,_0x46b7f4['RPrOu'])](_0x2b8ba2)[_0x46b7f4['FhdXp'](_0x4b58,_0x2f7a('9b','ooeK'))](),0x2));}(_0x46b7f4[_0x2f7a('9c','2hD9')](_0x4b58,'0x14'));_0x4f9e78[_0x46b7f4['zPwLT'](_0x4b58,'0x15')](_0x46b7f4[_0x2f7a('9d','w@yZ')](_0x4b58,_0x46b7f4['WpfFq']),_0x2b8ba2);},function(_0x57384a,_0x196e35){var _0x580108={'yjYeD':function(_0x366794,_0x50723e){return _0x366794===_0x50723e;},'NKlif':_0x2f7a('9e','*T2r'),'pVDgr':_0x2f7a('9f','w@yZ'),'iTtUC':function(_0x25d32b,_0x15f6c1){return _0x25d32b(_0x15f6c1);},'KzGBY':_0x2f7a('a0','77lA'),'ZWech':_0x2f7a('a1','D5#M'),'NRsFh':function(_0x3522be,_0x4901bb,_0x5e9de0,_0x2f49ec){return _0x3522be(_0x4901bb,_0x5e9de0,_0x2f49ec);},'JsaGQ':function(_0x218aad,_0x332406){return _0x218aad!==_0x332406;},'PkwOB':_0x2f7a('a2','uq[b'),'CxwMA':function(_0x15a2bd,_0x3a3570){return _0x15a2bd(_0x3a3570);},'yIdJJ':function(_0x3a3227,_0x318c34){return _0x3a3227(_0x318c34);},'DRocK':'0x18','OkWEH':function(_0x45a864,_0x41ce57){return _0x45a864(_0x41ce57);},'zvdNM':_0x2f7a('a3','*T2r'),'zRhoC':_0x2f7a('a4','ooeK'),'pcgfG':function(_0x2e0797,_0x10c782){return _0x2e0797(_0x10c782);},'kXlda':'0x1d','iLkEi':function(_0x54c94a,_0x473fac,_0x6ef903,_0xea27b9){return _0x54c94a(_0x473fac,_0x6ef903,_0xea27b9);},'MrAWz':_0x2f7a('a5','X*(y'),'XqhUS':function(_0x3d0c34,_0x200308){return _0x3d0c34||_0x200308;},'cJFNi':function(_0x52f84f,_0x799db4){return _0x52f84f(_0x799db4);},'kecjO':function(_0x13edd1){return _0x13edd1();},'rchhR':function(_0x104432,_0x333bc6){return _0x104432(_0x333bc6);},'dsmSU':_0x2f7a('a6','3GuX'),'LwPvw':function(_0x2ab76b,_0x3e2033,_0x142c3d,_0x3fcce8){return _0x2ab76b(_0x3e2033,_0x142c3d,_0x3fcce8);},'qeosn':function(_0x4309c7,_0x4a0851){return _0x4309c7(_0x4a0851);},'aDhPt':_0x2f7a('a7','m[z['),'DYDId':_0x2f7a('a8','7nh4'),'JOHGO':'0x28','finTF':_0x2f7a('a9','Z7r0'),'mykgV':function(_0xdf698d,_0x4c9c3e){return _0xdf698d(_0x4c9c3e);},'nENrs':'0x24','PRBJW':function(_0x8ffb7d,_0x2de19a){return _0x8ffb7d(_0x2de19a);},'qZJsr':_0x2f7a('aa','(N72'),'EcRIL':_0x2f7a('ab','ADzZ'),'gALxc':_0x2f7a('ac','*1Uc'),'uKFHp':function(_0x385fd7,_0x36cc29){return _0x385fd7(_0x36cc29);},'FcDje':'0x2a','pzCGW':function(_0x3dfd7e,_0x318189){return _0x3dfd7e(_0x318189);},'gbCxC':function(_0x477f78,_0x5ec2bc){return _0x477f78(_0x5ec2bc);},'tLAlQ':'0x2b','IHLEp':function(_0xef0d46,_0x4b7d70){return _0xef0d46(_0x4b7d70);},'VVccb':_0x2f7a('ad','&QbA'),'DIioN':function(_0xabd1be,_0x5cd570){return _0xabd1be(_0x5cd570);},'ymjvS':function(_0x565b34,_0xcfb25a){return _0x565b34(_0xcfb25a);},'diTDR':function(_0x316a5d,_0x1bb7c5){return _0x316a5d===_0x1bb7c5;},'BPyOJ':_0x2f7a('ae','ge3A'),'jDYVB':function(_0x3bc9dd,_0x4edf28){return _0x3bc9dd(_0x4edf28);},'NXJXL':_0x2f7a('af','77lA'),'GKuqG':_0x2f7a('b0','c^$p'),'zeuTH':_0x2f7a('b1','W%8)'),'UgsVz':'setArgument','vGizz':'0x31','CsKpQ':_0x2f7a('b2','uq[b'),'CaBjt':_0x2f7a('b3','D5#M'),'vgoAE':_0x2f7a('b4','b2ra'),'UfHSZ':'JavaScriptFileSource','HuqRY':'0x26','PJDvD':_0x2f7a('b5','%E&o'),'mclnN':function(_0x11b5ee,_0x2ec9bb){return _0x11b5ee-_0x2ec9bb;},'LJTuj':function(_0x472acb,_0xd06643){return _0x472acb(_0xd06643);},'BJJCn':_0x2f7a('b6','nKO1'),'YAuQj':'toStringTag','Ftjng':_0x2f7a('b7','UMNN'),'zRZLs':function(_0x3c794c,_0x551212){return _0x3c794c(_0x551212);},'IiiwL':'0x20','zqAzo':'getTopLevelScope','pYuNo':function(_0x31b995,_0x34d340){return _0x31b995(_0x34d340);},'fKXFM':_0x2f7a('b8','2hD9'),'xemDn':'javascript','cnDOj':function(_0x316a1b,_0x2ee77d){return _0x316a1b(_0x2ee77d);},'QdgTp':_0x2f7a('b9','ADzZ'),'IzRnU':function(_0x526634,_0x21fce9){return _0x526634(_0x21fce9);},'YUQGg':_0x2f7a('ba','D2h7'),'kpLxD':function(_0x505fec,_0x1c251b){return _0x505fec+_0x1c251b;},'IkBpb':function(_0x59d95f,_0x42a1a5){return _0x59d95f(_0x42a1a5);},'fIcvf':_0x2f7a('bb','i*Rc'),'HAroK':'util','iFGYL':'0x10','fheUd':_0x2f7a('bc','7nh4'),'ohREH':'0x13','LlDkP':'OCUHi','QUBQE':'wUgcW','PBQOd':_0x2f7a('bd','*Lmf'),'HFktw':_0x2f7a('be','3GuX'),'LJhWN':function(_0x103929,_0x13b4c3){return _0x103929(_0x13b4c3);},'heiQq':_0x2f7a('bf','3GuX')};_0x57384a[_0x580108[_0x2f7a('c0','ml%P')](_0x4b58,_0x580108[_0x2f7a('c1','nKO1')])]=(()=>{var _0x3a8b65={'zlWAT':_0x2f7a('c2','59G3'),'hfclW':function(_0x2be9ae,_0x5c5870){return _0x2be9ae(_0x5c5870);},'MFvvZ':_0x2f7a('c3','59G3'),'jgKgV':_0x580108[_0x2f7a('c4','9djz')],'mCdle':function(_0x2f0151,_0x3c8c14){return _0x580108[_0x2f7a('c5','kLia')](_0x2f0151,_0x3c8c14);},'iEVcb':_0x580108[_0x2f7a('c6','$zUo')],'qgFpd':_0x580108[_0x2f7a('c7','C4kl')],'YNRIk':function(_0x31c0e7,_0x3c2132,_0x5f377e,_0xa2204c){return _0x580108[_0x2f7a('c8','*1Uc')](_0x31c0e7,_0x3c2132,_0x5f377e,_0xa2204c);},'gGRkw':_0x2f7a('c9','Ywgg'),'ezsHi':_0x580108[_0x2f7a('ca','9djz')],'scYOS':_0x580108[_0x2f7a('cb','77lA')],'bZZYe':function(_0x36e675,_0x172894){return _0x36e675(_0x172894);},'FnsET':'0x28','iqFco':_0x580108[_0x2f7a('cc','i*Rc')],'TMwHN':function(_0x2fefcc,_0x1b13bc){return _0x580108[_0x2f7a('cd','%E&o')](_0x2fefcc,_0x1b13bc);},'srVEt':_0x580108[_0x2f7a('ce','i*Rc')],'NOfva':function(_0x538c82,_0xd5c24e){return _0x580108[_0x2f7a('cf','(N72')](_0x538c82,_0xd5c24e);},'bwTwf':_0x580108['nENrs'],'IcoIO':function(_0x1f1ba0,_0x41129c){return _0x580108[_0x2f7a('d0','59G3')](_0x1f1ba0,_0x41129c);},'QLcNg':function(_0x3b9b05,_0xf05de0){return _0x580108[_0x2f7a('d1','%E&o')](_0x3b9b05,_0xf05de0);},'PaQbU':_0x580108[_0x2f7a('d2','77lA')],'HxmWb':_0x580108['YAuQj'],'COOoI':_0x2f7a('d3','%E&o'),'nMfKm':_0x580108[_0x2f7a('d4','(N72')],'VWvMa':_0x2f7a('d5','&QbA'),'FXoVZ':function(_0x879a03,_0x162a8e){return _0x580108[_0x2f7a('d6','r^tY')](_0x879a03,_0x162a8e);},'vdsJF':_0x580108['IiiwL'],'JJdgY':_0x580108[_0x2f7a('d7','77lA')],'SIaks':function(_0x4fe73a,_0x21cd0e){return _0x580108[_0x2f7a('d8','uq[b')](_0x4fe73a,_0x21cd0e);},'rYYSP':_0x580108['fKXFM'],'xcinr':_0x580108[_0x2f7a('d9','C4kl')],'FCKrE':function(_0x13e5cd,_0x1ce69a){return _0x580108[_0x2f7a('da','bSvN')](_0x13e5cd,_0x1ce69a);},'AAuGu':_0x580108['QdgTp'],'LJRKP':function(_0x3a670b,_0x2cf4c1){return _0x580108['IzRnU'](_0x3a670b,_0x2cf4c1);},'HeISE':function(_0x325e03,_0x2cb88b){return _0x580108[_0x2f7a('db','Z7r0')](_0x325e03,_0x2cb88b);},'wgLHC':_0x580108[_0x2f7a('dc','g3gk')],'oepbI':function(_0x569e8e,_0x65d141){return _0x580108[_0x2f7a('dd','$zUo')](_0x569e8e,_0x65d141);},'znSgd':function(_0x55c70e,_0x13a0be){return _0x580108['IkBpb'](_0x55c70e,_0x13a0be);},'iAtWT':_0x580108[_0x2f7a('de','*Lmf')],'iCgbE':_0x580108[_0x2f7a('df','59G3')],'RTxmz':_0x580108['iFGYL'],'xDZMw':_0x580108[_0x2f7a('e0','yyMX')],'HkwXN':_0x2f7a('e1','!4qH'),'XiacI':_0x580108[_0x2f7a('e2','i*Rc')],'PtVxK':function(_0x3b36c9,_0x14f9d0){return _0x3b36c9===_0x14f9d0;},'qVSRX':_0x580108[_0x2f7a('e3','m[z[')],'JjHUB':_0x580108[_0x2f7a('e4','OL9*')],'ILakE':function(_0x23288c,_0x34bcdf){return _0x23288c!=_0x34bcdf;},'MtETm':_0x580108[_0x2f7a('e5','*1Uc')],'wOXoZ':function(_0x2bc4b0,_0x3a9849){return _0x580108[_0x2f7a('e6','i*Rc')](_0x2bc4b0,_0x3a9849);},'PszRy':_0x580108[_0x2f7a('e7','59G3')],'fbcWS':function(_0x39d905,_0x5a180a){return _0x580108[_0x2f7a('e8','9djz')](_0x39d905,_0x5a180a);},'rATes':'0x37'};var _0x57384a={'execScriptFile':function(_0x57384a,_0x55477c,_0x2dfbdf){let _0x47c0a2=com[_0x3a8b65[_0x2f7a('e9','U%P$')]][_0x3a8b65['hfclW'](_0x4b58,'0x17')][_0x4b58(_0x3a8b65[_0x2f7a('ea','2hD9')])][_0x3a8b65['jgKgV']](java['io'][_0x3a8b65[_0x2f7a('eb','X*(y')](_0x4b58,_0x3a8b65[_0x2f7a('ec','(N72')])](files[_0x3a8b65[_0x2f7a('ed','b2ra')]](_0x57384a)));return _0x3a8b65[_0x2f7a('ee','X*(y')](_0x196e35,_0x47c0a2,_0x55477c,_0x2dfbdf);},'execScript':function(_0x57384a,_0x55477c,_0x1feb79,_0x5a9565){if(_0x580108[_0x2f7a('ef','UMNN')](_0x580108[_0x2f7a('f0','#o%S')],_0x580108['NKlif'])){let _0x4ae627=com[_0x4b58(_0x580108[_0x2f7a('f1','ooeK')])][_0x580108['iTtUC'](_0x4b58,_0x580108['KzGBY'])][_0x4b58(_0x2f7a('f2','77lA'))][_0x580108['iTtUC'](_0x4b58,_0x580108['ZWech'])](_0x57384a,_0x55477c);return _0x580108['NRsFh'](_0x196e35,_0x4ae627,_0x1feb79,_0x5a9565);}else{let _0x3f41ed=runtime[_0x2f7a('f3','&rdd')][_0x3a8b65[_0x2f7a('f4','eGR&')](_0x4b58,_0x3a8b65[_0x2f7a('f5','D2h7')])]()[_0x3a8b65[_0x2f7a('f6','2hD9')](_0x4b58,_0x3a8b65[_0x2f7a('f7','!4qH')])](_0x4b58(_0x3a8b65[_0x2f7a('f8','77lA')]));_0x3f41ed[_0x3a8b65[_0x2f7a('f9','uq[b')](_0x4b58,_0x3a8b65[_0x2f7a('fa','FfN)')])](!0x0);let _0x5a5e56=_0x3f41ed[_0x3a8b65['iqFco']](runtime[_0x3a8b65[_0x2f7a('fb','*1Uc')](_0x4b58,_0x3a8b65[_0x2f7a('fc','r^tY')])]);_0x3f41ed[_0x3a8b65[_0x2f7a('fd','C4kl')](_0x4b58,_0x3a8b65['FnsET'])](!0x1),_0x5a5e56[_0x3a8b65['NOfva'](_0x4b58,_0x3a8b65[_0x2f7a('fe','Z7r0')])](_0x57384a,_0x577994,_0x3a8b65['NOfva'](_0x55477c,_0x58a2c7));}},'execAutoScript':function(_0x57384a,_0x55477c,_0x3d1464){if(_0x580108[_0x2f7a('ff','yyMX')]('WbIZU',_0x580108['PkwOB'])){let _0x278af8=com[_0x580108['iTtUC'](_0x4b58,_0x580108[_0x2f7a('100','!4qH')])][_0x580108[_0x2f7a('101','!4qH')](_0x4b58,_0x580108[_0x2f7a('102','ge3A')])][_0x580108['yIdJJ'](_0x4b58,_0x580108['DRocK'])][_0x580108[_0x2f7a('103','&QbA')](_0x4b58,_0x580108[_0x2f7a('104','X*(y')])](java['io'][_0x4b58(_0x580108['zRhoC'])](files[_0x580108['pcgfG'](_0x4b58,_0x580108[_0x2f7a('105','r^tY')])](_0x57384a)));return _0x580108['iLkEi'](_0x196e35,_0x278af8,_0x55477c,_0x3d1464);}else{_0x12eb1b=_0x3a8b65['IcoIO'](_0x12eb1b,0x0);var _0x12537d=_0x511f[_0x12eb1b];return _0x12537d;}}},_0x196e35=function(_0x57384a,_0x196e35,_0x257da0){if('ZETbF'!==_0x580108[_0x2f7a('106','yyMX')]){_0x3a8b65[_0x2f7a('107','(N72')](_0x4b58,_0x3a8b65[_0x2f7a('108','Ywgg')])!=typeof Symbol&&Symbol[_0x3a8b65['HxmWb']]&&Object[_0x3a8b65[_0x2f7a('109','ipX&')](_0x4b58,_0x2f7a('10a','D2h7'))](_0x338a0e,Symbol[_0x3a8b65[_0x2f7a('10b','3GuX')]],{'value':_0x3a8b65['COOoI']}),Object[_0x4b58(_0x2f7a('10c','w@yZ'))](_0x338a0e,_0x4b58(_0x3a8b65[_0x2f7a('10d','uq[b')]),{'value':!0x0});}else{_0x196e35=_0x196e35||{},_0x257da0=_0x580108[_0x2f7a('10e','Ywgg')](_0x257da0,{}),_0x580108[_0x2f7a('10f','9djz')](importPackage,com[_0x2f7a('110','g3gk')][_0x4b58(_0x580108[_0x2f7a('111','f)yg')])][_0x580108[_0x2f7a('112','p#cM')](_0x4b58,'0x1e')]);let _0x2ca755=_0x580108[_0x2f7a('113','&rdd')](ScriptExecutionListener,{'onStart':function(_0x57384a){var _0x3a515f={'UqVIA':'push','uiUbm':'shift'};if(_0x2f7a('114','ooeK')!==_0x3a8b65['VWvMa']){let _0x55477c=_0x57384a[_0x3a8b65[_0x2f7a('115','nKO1')](_0x4b58,_0x2f7a('116','&QbA'))]()[_0x3a8b65[_0x2f7a('117','*Lmf')](_0x4b58,_0x3a8b65[_0x2f7a('118','pv[@')])]()[_0x3a8b65['JJdgY']](),_0x2ac656=org[_0x3a8b65[_0x2f7a('119','b2ra')](_0x4b58,_0x3a8b65['rYYSP'])][_0x3a8b65[_0x2f7a('11a','FfN)')]]['ScriptableObject'];for(let _0x57384a in _0x196e35)_0x2ac656[_0x3a8b65['FCKrE'](_0x4b58,_0x3a8b65['AAuGu'])](_0x55477c,_0x57384a,_0x196e35[_0x57384a]);}else{var _0x14813f=function(_0x56b977){while(--_0x56b977){_0x5a4f99[_0x3a515f[_0x2f7a('11b','*Lmf')]](_0x5a4f99[_0x3a515f['uiUbm']]());}};_0x14813f(++_0x4bbc7f);}}});if(_0x580108[_0x2f7a('11c','@Wsd')](_0x9530e1))return runtime[_0x580108[_0x2f7a('11d','59G3')](_0x4b58,_0x580108['dsmSU'])][_0x4b58('0x24')](null,_0x580108['LwPvw'](ScriptExecutionTask,_0x57384a,_0x2ca755,_0x580108[_0x2f7a('11e','#o%S')](_0x55477c,_0x257da0)));{let _0x196e35=runtime[_0x580108['aDhPt']][_0x4b58(_0x580108['DYDId'])]()[_0x4b58(_0x2f7a('11f','W%8)'))](_0x4b58('0x27'));_0x196e35[_0x580108[_0x2f7a('120','FfN)')](_0x4b58,_0x580108['JOHGO'])](!0x0);let _0x3bc631=_0x196e35[_0x580108['finTF']](runtime[_0x580108['qeosn'](_0x4b58,_0x2f7a('121','Ywgg'))]);_0x196e35[_0x4b58(_0x580108[_0x2f7a('122','ipX&')])](!0x1),_0x3bc631[_0x580108['mykgV'](_0x4b58,_0x580108[_0x2f7a('123','Ywgg')])](_0x57384a,_0x2ca755,_0x580108['PRBJW'](_0x55477c,_0x257da0));}}},_0x55477c=function(_0x57384a){if(_0x580108[_0x2f7a('124','U%P$')]===_0x2f7a('125','r^tY')){var _0x196e35=new com[(_0x580108['PRBJW'](_0x4b58,_0x580108[_0x2f7a('126','Ywgg')]))]['autojs'][(_0x4b58(_0x2f7a('127','ooeK')))][(_0x580108[_0x2f7a('128','i*Rc')](_0x4b58,_0x580108[_0x2f7a('129','Ywgg')]))]();if((_0x57384a=_0x57384a||{})[_0x580108[_0x2f7a('12a','W%8)')]]=_0x57384a[_0x580108[_0x2f7a('12b','(N72')](_0x4b58,_0x580108['kXlda'])]||files[_0x4b58(_0x580108[_0x2f7a('12c','&QbA')])](),_0x57384a[_0x580108['pzCGW'](_0x4b58,_0x2f7a('12d','yyMX'))]&&(_0x196e35[_0x580108[_0x2f7a('12e','Z7r0')](_0x4b58,_0x580108[_0x2f7a('12f','ADzZ')])]=_0x57384a[_0x580108[_0x2f7a('130','Z7r0')](_0x4b58,_0x580108[_0x2f7a('131','pv[@')])]),_0x196e35[_0x4b58(_0x580108[_0x2f7a('132','C4kl')])]=_0x57384a[_0x580108[_0x2f7a('133','%E&o')](_0x4b58,_0x2f7a('134','OL9*'))]||0x0,_0x196e35[_0x580108['DIioN'](_0x4b58,_0x2f7a('135','OL9*'))]=_0x57384a[_0x4b58(_0x2f7a('136','77lA'))]||0x0,_0x196e35[_0x580108[_0x2f7a('137','$zUo')](_0x4b58,_0x2f7a('138','OL9*'))]=_0x580108['diTDR'](void 0x0,_0x57384a[_0x580108[_0x2f7a('139','ADzZ')](_0x4b58,_0x580108[_0x2f7a('13a','2hD9')])])?0x1:_0x57384a[_0x2f7a('13b','i*Rc')],_0x57384a[_0x580108[_0x2f7a('13c','C4kl')](_0x4b58,_0x580108['NXJXL'])]){if(_0x580108[_0x2f7a('13d','nKO1')](_0x2f7a('13e','Z7r0'),_0x580108[_0x2f7a('13f','%QSt')])){var _0x55477c=_0x57384a[_0x580108[_0x2f7a('140','yyMX')](_0x4b58,_0x580108[_0x2f7a('141','*Lmf')])];for(var _0x12509d in _0x55477c)Object[_0x4b58(_0x580108[_0x2f7a('142','59G3')])][_0x2f7a('143','*Lmf')][_0x580108['jDYVB'](_0x4b58,_0x2f7a('144','eGR&'))](_0x55477c,_0x12509d)&&_0x196e35[_0x580108[_0x2f7a('145','g3gk')]](_0x12509d,_0x55477c[_0x12509d]);}else{return _0x338a0e[_0x38bca5];}}return _0x9530e1()&&(_0x196e35[_0x2f7a('146','FfN)')]=engines[_0x4b58(_0x580108[_0x2f7a('147','D2h7')])]()[_0x4b58(_0x580108['CsKpQ'])](_0x580108[_0x2f7a('148','ooeK')])[_0x580108[_0x2f7a('149','59G3')](_0x4b58,_0x580108[_0x2f7a('14a','*Lmf')])]),_0x196e35;}else{let _0x3b74fe=com[_0x3a8b65[_0x2f7a('14b','(N72')]][_0x4b58(_0x2f7a('14c','ooeK'))][_0x3a8b65[_0x2f7a('14d','c^$p')](_0x4b58,_0x3a8b65['MFvvZ'])][_0x3a8b65[_0x2f7a('14e','uq[b')]](java['io'][_0x3a8b65['LJRKP'](_0x4b58,_0x3a8b65['iEVcb'])](files[_0x3a8b65[_0x2f7a('14f','&QbA')]](_0x57384a)));return _0x3a8b65[_0x2f7a('150','3GuX')](_0x196e35,_0x3b74fe,_0x55477c,_0x3cf83b);}};function _0x9530e1(){var _0x2d35fe={'GXLpL':_0x2f7a('151','b2ra'),'mTNOc':function(_0x4452d1,_0x22b9b9){return _0x4452d1(_0x22b9b9);},'gBCbv':function(_0x41b194,_0xaadf59){return _0x3a8b65[_0x2f7a('152','ge3A')](_0x41b194,_0xaadf59);},'yPzGG':_0x2f7a('153','r^tY'),'PEdrj':function(_0x3d5834,_0x2275e8){return _0x3a8b65[_0x2f7a('154','$zUo')](_0x3d5834,_0x2275e8);},'GmsmV':_0x3a8b65[_0x2f7a('155','*1Uc')],'mVGYX':function(_0x209005,_0x5ea15){return _0x3a8b65[_0x2f7a('156','ml%P')](_0x209005,_0x5ea15);},'MsbwU':function(_0x597b66,_0x412bb4){return _0x597b66+_0x412bb4;},'nQehd':function(_0x329aef,_0x4f6278){return _0x3a8b65['znSgd'](_0x329aef,_0x4f6278);},'Nyxif':_0x2f7a('157','*Lmf'),'cPJsu':_0x2f7a('158','D5#M'),'svCOn':function(_0xf509f0,_0x3c308b){return _0x3a8b65[_0x2f7a('159','%QSt')](_0xf509f0,_0x3c308b);},'NOnvx':_0x3a8b65['iAtWT'],'DRzkw':_0x3a8b65['iCgbE'],'ziYgO':function(_0x1219b3,_0x40ef3b){return _0x1219b3(_0x40ef3b);},'OHDaN':_0x3a8b65[_0x2f7a('15a','w@yZ')],'tyVRW':_0x2f7a('15b','kLia'),'SGgrM':function(_0x17c921,_0x15f912){return _0x3a8b65[_0x2f7a('15c','@Wsd')](_0x17c921,_0x15f912);},'xJDxS':_0x3a8b65[_0x2f7a('15d','eGR&')],'wpUcy':_0x3a8b65[_0x2f7a('15e','*Lmf')],'lfmBw':_0x3a8b65[_0x2f7a('15f','ge3A')]};if(_0x3a8b65[_0x2f7a('160','3GuX')](_0x3a8b65[_0x2f7a('161','9djz')],_0x3a8b65[_0x2f7a('162','&rdd')])){let _0x24f6b9=_0x2d35fe[_0x2f7a('163','Ywgg')](parseInt,_0x2d35fe[_0x2f7a('164','Ywgg')]),_0x3f4295=parseInt(_0x2d35fe[_0x2f7a('165','3GuX')](_0x4b58,_0x2d35fe[_0x2f7a('166','#o%S')])),_0x5e402f=function(_0x229150){if(!/\d\d\d/[_0x4b58(_0x2f7a('167','uq[b'))](_0x229150))throw new Error(_0x4b58(_0x2d35fe[_0x2f7a('168','Z7r0')]));let _0x24f6b9=_0x229150[_0x2f7a('169','D5#M')](''),_0x3f4295=parseInt(_0x2d35fe[_0x2f7a('16a','%E&o')](_0x4b58,_0x2f7a('16b','%E&o'))),_0x5e402f=_0x2d35fe[_0x2f7a('16c','b2ra')](parseInt,_0x4b58(_0x2d35fe[_0x2f7a('16d','Ywgg')])),_0x358a02=_0x2d35fe[_0x2f7a('16e','ge3A')](parseInt,_0x2d35fe[_0x2f7a('16f','Ywgg')](_0x4b58,_0x2d35fe[_0x2f7a('170','&QbA')]));return _0x2d35fe[_0x2f7a('171','ADzZ')](_0x2d35fe[_0x2f7a('172','D2h7')](_0x2d35fe['PEdrj'](parseInt,_0x24f6b9[_0x3f4295]),_0x2d35fe['PEdrj'](parseInt,_0x24f6b9[_0x5e402f])),parseInt(_0x24f6b9[_0x358a02]));}(_0x1e4c62['slice'](0x0,_0x24f6b9)),_0x358a02=_0x1e4c62[_0x2d35fe['svCOn'](_0x4b58,_0x2d35fe[_0x2f7a('173','pv[@')])](_0x3f4295+_0x5e402f);return java[_0x2f7a('174','f)yg')][_0x2d35fe[_0x2f7a('175','ml%P')](_0x4b58,_0x2f7a('176','r^tY'))](android[_0x2d35fe[_0x2f7a('177','77lA')]][_0x2d35fe[_0x2f7a('178','2hD9')](_0x4b58,_0x2d35fe[_0x2f7a('179','UMNN')])][_0x4b58(_0x2d35fe[_0x2f7a('17a','ge3A')])](java[_0x2d35fe[_0x2f7a('17b','*1Uc')](_0x4b58,_0x2d35fe[_0x2f7a('17c','yyMX')])][_0x2d35fe['SGgrM'](_0x4b58,_0x2d35fe['wpUcy'])](_0x358a02)[_0x4b58(_0x2d35fe['lfmBw'])](),0x2));}else{return _0x3a8b65[_0x2f7a('17d','FfN)')](-0x1,app[_0x2f7a('17e','p#cM')][_0x3a8b65[_0x2f7a('17f','g3gk')](_0x4b58,_0x3a8b65[_0x2f7a('180','FfN)')])][_0x3a8b65[_0x2f7a('181','&QbA')](_0x4b58,'0x35')]()[_0x3a8b65[_0x2f7a('182','uq[b')](_0x4b58,_0x3a8b65[_0x2f7a('183','(N72')])](_0x3a8b65[_0x2f7a('184','@Wsd')](_0x4b58,_0x3a8b65['rATes'])));}}return _0x57384a;})();}]);`
              result = 前缀 + result + 后缀;
            }
          }
          compilation.assets[file] = new ConcatSource(result);
        });
      });
      callback();
    });
  }
}
module.exports = SetHeader;
