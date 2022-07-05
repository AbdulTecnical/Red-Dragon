//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is RED DRAGON🔥
My Creator is Kumuthu Prabhasha😎` //Costomize Alive Message (type your message in `` )

global.owner = ['+380944814219'] //Owner number in aive msg
global.premium = ['+380944814219'] //Owner Number info
global.ownernomer = '+380944814219' //Owner Number <<<

global.ownername = '' //Owner Name
global.botname = ' ☬{
  "creds": {
    "noiseKey": {
      "private": {
        "type": "Buffer",
        "data": "UBJiv45lwjpvMiLXhq9AkHeGh1Og5TsaCMysOVLbb3w="
      },
      "public": {
        "type": "Buffer",
        "data": "lv+25R6PPk4GcnuTmSs6Jj4UqObw8Its09NkmXodVHY="
      }
    },
    "signedIdentityKey": {
      "private": {
        "type": "Buffer",
        "data": "QGdXVsRM+fdOA7QJSS6oIBzvLiIT6qlsK5aGhSQsUGo="
      },
      "public": {
        "type": "Buffer",
        "data": "AkI7M+8ap68aCGWYUdi5h0hi4v2yrNwSmFJWtWCI/GU="
      }
    },
    "signedPreKey": {
      "keyPair": {
        "private": {
          "type": "Buffer",
          "data": "gFuPtGIz7Oy7mBcnuiQ4Tb7KScKPpVBXpY5GJKmOFFM="
        },
        "public": {
          "type": "Buffer",
          "data": "MIjMpVe6QBSrdkVtcfN6K67qkPuRzJEJSPfUps84Xmk="
        }
      },
      "signature": {
        "type": "Buffer",
        "data": "zZmzAWQ+gjVIH/7ep7qOCoQ81vdG65MLcq3UqzTUhwK4jyPvyXlG1VCgmLiHu6KPFu870ElqNRBtVR/sj4qADQ=="
      },
      "keyId": 1
    },
    "registrationId": 107,
    "advSecretKey": "kkdk4FpZp51/MkRE4j4nCKwn0yxyztyRBBcZ9ViYylI=",
    "nextPreKeyId": 31,
    "firstUnuploadedPreKeyId": 31,
    "serverHasPreKeys": true,
    "account": {
      "details": "CIbEpaIEEKaJkZYGGAE=",
      "accountSignatureKey": "kOxUaLTx7XCINN3ZnwC9bPvHRrA2G6SNt7wEirF6a1c=",
      "accountSignature": "nTFH+q30Vo38GSpvhIV1FuS+AVetf9/uIfr9vt8jCpTY5OPn8IM+Ow6T/h88uPSc3zq8n5FhVeiHAvFFhWFwCA==",
      "deviceSignature": "p61F4ZrVEFSbdTrg6HcfNZ/F/uQf73jqXwzVUfDnLnwxx+jdQ7aZQuFYrBYGeKMYNVz+uFv9gMQw18y7SMWrDg=="
    },
    "me": {
      "id": "94751846771:2@s.whatsapp.net",
      "verifiedName": "",
      "name": "➳ᴹᴿ᭄AZͥ TͣEͫCHNICAL ࿐"
    },
    "signalIdentities": [
      {
        "identifier": {
          "name": "94751846771:2@s.whatsapp.net",
          "deviceId": 0
        },
        "identifierKey": {
          "type": "Buffer",
          "data": "BZDsVGi08e1wiDTd2Z8AvWz7x0awNhukjbe8BIqxemtX"
        }
      }
    ],
    "lastAccountSyncTimestamp": 1657029800,
    "myAppStateKeyId": "AAAAAE9+"
  },
  "keys": {
    "preKeys": {
      "1": {
        "private": {
          "type": "Buffer",
          "data": "CBkXAevsERSod6YEplAgzZW9x8Qoa3y9S0Ga5n/w6WE="
        },
        "public": {
          "type": "Buffer",
          "data": "hXSf5sXcLmssydqaMuJ3GB5t0U71HsVEX/bHfsEjgFA="
        }
      },
      "2": {
        "private": {
          "type": "Buffer",
          "data": "mJ5If7+33zmO02/1LX3AbKEIXesuj1NQBE2+OgaNR0Q="
        },
        "public": {
          "type": "Buffer",
          "data": "ptvsaLLr3cUhmH0k9ViIM/MKVBGawX4tuLCMAOXmg2w="
        }
      },
      "3": {
        "private": {
          "type": "Buffer",
          "data": "SGTo9nsGPkhtxie+NSFHkshM4cjCraeKFiZQl2e48lo="
        },
        "public": {
          "type": "Buffer",
          "data": "I3mbhbdmmVMLKyjiLD7iLpi2dmomZRIQK66VojEUdQc="
        }
      },
      "4": {
        "private": {
          "type": "Buffer",
          "data": "8NoHgRT7ythTidmZBEIe4WtWhGqzKb7Cey2S76QSgFc="
        },
        "public": {
          "type": "Buffer",
          "data": "IbSeqya2Oj9PEalLJcXtaczqeyL9s8tn6nKw3a0b810="
        }
      },
      "5": {
        "private": {
          "type": "Buffer",
          "data": "ODNxcO3OFU92wcxOgoPVTbMgDQ38XFhRmsdGR4uVDm0="
        },
        "public": {
          "type": "Buffer",
          "data": "dmCSxTho1ryGiqqgwBMw3X3oQJYB9GglTp5RR8zklV0="
        }
      },
      "6": {
        "private": {
          "type": "Buffer",
          "data": "2IGX5TeT+mjckro7xRtpKXk1GJSwzrfbNLzcvqhfREs="
        },
        "public": {
          "type": "Buffer",
          "data": "nurvaSgbG3hwRrCe/1b7fXFU4z9TQ+oDZngweNSKGRQ="
        }
      },
      "7": {
        "private": {
          "type": "Buffer",
          "data": "EMxmuO7j6vwvC24EWU/LxBz+XtplzsNobxE3q7z+VH8="
        },
        "public": {
          "type": "Buffer",
          "data": "zu7KnY3d+H18n3lMGxQgI7A8FEd4oEA7A5WKvgcGjks="
        }
      },
      "8": {
        "private": {
          "type": "Buffer",
          "data": "6GetjoQoYHPZjKiEDym2RpXFWWozyzAoz3HwXJCA6WM="
        },
        "public": {
          "type": "Buffer",
          "data": "BVqNdtavodU1JhSb1PmBHZamPKCye6me0wGGm4s5wW8="
        }
      },
      "9": {
        "private": {
          "type": "Buffer",
          "data": "qMVsyZaPlbCFhdwguFrQNOR43Ax4zvAmnDSOXRx5lVM="
        },
        "public": {
          "type": "Buffer",
          "data": "7q2GtCrvf6tCO2cmqU4c3+WDL7+MhBhtNU2JVxDq9VI="
        }
      },
      "10": {
        "private": {
          "type": "Buffer",
          "data": "CPbOX1U8tX0JtHe48NudCh/eePaIgdos9xlQSlF0fl0="
        },
        "public": {
          "type": "Buffer",
          "data": "AF9wjH8KR6rdD6NgTpgeqxkNC2s6qqAYhyqityxro3E="
        }
      },
      "11": {
        "private": {
          "type": "Buffer",
          "data": "sEmpMGcr6LWO3JIO77G6TPI0Wl8n1ZadwSFbsxhkfnE="
        },
        "public": {
          "type": "Buffer",
          "data": "j/+0Q+YTqCy+p6weVvBNXQTvQgLMb48xY/ZbuFezgkE="
        }
      },
      "12": {
        "private": {
          "type": "Buffer",
          "data": "ECEH6SqMDzSOKof7CCG0vK8jTcNGVVpfU7xxe2tmFks="
        },
        "public": {
          "type": "Buffer",
          "data": "aUbC1UEyenJYl5mO6xUGInNzU2YvQO+YmsUQIDKw3Ug="
        }
      },
      "13": {
        "private": {
          "type": "Buffer",
          "data": "sKBHgyry4NGZ2e6O1WVMty1LIKsUJXLqHxjzw0ElSms="
        },
        "public": {
          "type": "Buffer",
          "data": "D1C/OD8896RLWrp5oge+jNPcDpyjGhjYgBJczJGJG3M="
        }
      },
      "14": {
        "private": {
          "type": "Buffer",
          "data": "+DZ7YcAZqtChQbaV/0uxWjgEI3XzIpFX+UD8HEMXmHw="
        },
        "public": {
          "type": "Buffer",
          "data": "+gXkrA6O8d4xzyztYht+E65NT1ZI72TJnrGnfDWzPAs="
        }
      },
      "15": {
        "private": {
          "type": "Buffer",
          "data": "aHojRwcfNd9Ixff6Z9E20retFdcae4xn4UwIQEBBc3U="
        },
        "public": {
          "type": "Buffer",
          "data": "ND728PGpGX9+sqrZ38OI/J7BusyK3/HNMsX/6HwVzXI="
        }
      },
      "16": {
        "private": {
          "type": "Buffer",
          "data": "GJG5Svb2EkDHJT0H9yUjQbReLwGVPvvqdxFFQb2eNEM="
        },
        "public": {
          "type": "Buffer",
          "data": "qpkDcq5gKNsYfVE2xId5SCZzAKx+48uMi6CjBlURhwg="
        }
      },
      "17": null,
      "18": {
        "private": {
          "type": "Buffer",
          "data": "GM7wEpaHm2t9R5oYsvJvRqqcDlsETHP/dd51P/gHnko="
        },
        "public": {
          "type": "Buffer",
          "data": "8qliIYv4RVhabExwYqZozckkVO+Y5i75iyWEV3odSB0="
        }
      },
      "19": {
        "private": {
          "type": "Buffer",
          "data": "4P4sGw5i2E5zFJGTVdTK1kCXx4diq2eg9mJnX5mL428="
        },
        "public": {
          "type": "Buffer",
          "data": "plVmz/UQYzC9aQ0AQ/6SHCUX257rDzkVhozTiTk/O0w="
        }
      },
      "20": {
        "private": {
          "type": "Buffer",
          "data": "OLFytoBl6YGvvUjgOmqif+x10y59WEx+CVhUNEVh7nM="
        },
        "public": {
          "type": "Buffer",
          "data": "T7cG8PsQ5S/PjDRZTe3QS594Pwp7KWTcy9wk3Ilaqwo="
        }
      },
      "21": {
        "private": {
          "type": "Buffer",
          "data": "cB4kOFqDcLC93doDuEne7nJ3aD2i5jhaOXuzT18x9k8="
        },
        "public": {
          "type": "Buffer",
          "data": "egLstgeYDuG4KdOk4PDV89iRBPTYpHBL7XYHZMivKHQ="
        }
      },
      "22": {
        "private": {
          "type": "Buffer",
          "data": "mLcuq2A0yCF1B2zWRsk2KEayBFBug9rU3J4/n36T3l4="
        },
        "public": {
          "type": "Buffer",
          "data": "BCizIPMLqfJ+MehIisdgZKdSvub72vFn8wzWNBHwKnM="
        }
      },
      "23": {
        "private": {
          "type": "Buffer",
          "data": "kGSt39c968WIHMiE0aTLQkPdOBd9iOQlA34fuy1Kkko="
        },
        "public": {
          "type": "Buffer",
          "data": "3dTNz1z757XeE1SCZqoy1d+9yebQcYBSmdpJPvk7VwU="
        }
      },
      "24": {
        "private": {
          "type": "Buffer",
          "data": "oPgqnwk5AFa374AKV0PqrlQ3d+kBg+OE2kKk6u65u3w="
        },
        "public": {
          "type": "Buffer",
          "data": "4CGP6EuhWrO2P0rnBFuFlwp7Ii7GHCa9WsirmWDAxRo="
        }
      },
      "25": {
        "private": {
          "type": "Buffer",
          "data": "UBvRY+uixv/7A8ArV4ttPB6qxmX4GVbrbUJovZ20l3E="
        },
        "public": {
          "type": "Buffer",
          "data": "gzhqU1NHAnxMEVh+tG9893Bu3mNEd3GcM7nBadfbhSc="
        }
      },
      "26": {
        "private": {
          "type": "Buffer",
          "data": "MIhLiDfkXJTN+0lz1IaeJMfzinOe6gEMBrK4epbvt30="
        },
        "public": {
          "type": "Buffer",
          "data": "DbMu24zwx2dYK4OXOR1RVaYolQP0e7jIh7rmq9TSWzU="
        }
      },
      "27": {
        "private": {
          "type": "Buffer",
          "data": "8B3VWbAh4f+CD4L1K2zFLQIuW27tV4XIYgKiIoHasUQ="
        },
        "public": {
          "type": "Buffer",
          "data": "/HiftmxRSH8Dv+G2xXZ/KImDAhoWS10Ctv8GZtMktzg="
        }
      },
      "28": {
        "private": {
          "type": "Buffer",
          "data": "mNk/SyxkxywgEXCJI8b02cKx6WDTBktVdMGCPj0j41s="
        },
        "public": {
          "type": "Buffer",
          "data": "KOCjKRhylivuiT0V5sUn6vtFlsFn0qPrQcZ6kErkLDQ="
        }
      },
      "29": {
        "private": {
          "type": "Buffer",
          "data": "IN9N7p8GTKYnDnKG4x1Rjc4hQOYdv//J7Lk/HHh40mk="
        },
        "public": {
          "type": "Buffer",
          "data": "9RKsLRHOwynTO2ARKmqvpcxcWj4r67RtxQ2Vyig0qSA="
        }
      },
      "30": {
        "private": {
          "type": "Buffer",
          "data": "SA+mH9DiafXp6Mjx63wIhd4qUwYCqixj1iDprVB+SWI="
        },
        "public": {
          "type": "Buffer",
          "data": "rJ2AnJEDwGW3v561cI9+WplG9oU/VFkVr0OSgL3uijo="
        }
      }
    },
    "sessions": {
      "94751846771.0": {
        "_sessions": {
          "BZDkuPoO0IQyN1JSNvdfB5t6eyExN/i0z6K3X3yOUkdF": {
            "registrationId": 733958368,
            "currentRatchet": {
              "ephemeralKeyPair": {
                "pubKey": "BWXT2AaVvFOf/y2p4qZm5gWdFDgXgQugXe1I1yNglCsQ",
                "privKey": "6JdPKspz2YxFUjOGqjDOxkTtPBQ09hVMB9ducYh1ZmU="
              },
              "lastRemoteEphemeralKey": "BQBJeKC+XMvp3jTA7Wv+7U4FQZplHNam2yPqs/DtBqRU",
              "previousCounter": 0,
              "rootKey": "nUdA8eVyrNvGl/yJqn5WOKsJMkWwRM2OpzcVHvKUbjs="
            },
            "indexInfo": {
              "baseKey": "BZDkuPoO0IQyN1JSNvdfB5t6eyExN/i0z6K3X3yOUkdF",
              "baseKeyType": 2,
              "closed": -1,
              "used": 1657029801906,
              "created": 1657029801906,
              "remoteIdentityKey": "BZDsVGi08e1wiDTd2Z8AvWz7x0awNhukjbe8BIqxemtX"
            },
            "_chains": {
              "BQBJeKC+XMvp3jTA7Wv+7U4FQZplHNam2yPqs/DtBqRU": {
                "chainKey": {
                  "counter": 1,
                  "key": "JzVl3/xUbgw6qHj9h3iONhXj2UoNV2Rce5eodUonh9U="
                },
                "chainType": 2,
                "messageKeys": {}
              },
              "BWXT2AaVvFOf/y2p4qZm5gWdFDgXgQugXe1I1yNglCsQ": {
                "chainKey": {
                  "counter": -1,
                  "key": "huhAiXa5rrQzUrxpcJPKonY+qLL/KBeH5rSaUAq7OJg="
                },
                "chainType": 1,
                "messageKeys": {}
              }
            }
          }
        },
        "version": "v1"
      }
    },
    "appStateSyncKeys": {
      "AAAAAE9+": {
        "keyData": "qR+IVV3DROwtOGtLaX+jL5lCyufPPcoaanGRKBwXTxc=",
        "fingerprint": {
          "rawId": 1145659909,
          "currentIndex": 1,
          "deviceIndexes": [
            0,
            1
          ]
        },
        "timestamp": "0"
      }
    }
  }
}RED༒DRAGON࿐' //Bot Name

global.button = '🤭Youtube📍' //Costomize A Button Name In Alive Message
global.btnurl = 'https://youtu.be/E5C-lrl_g9I' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '☬RED༒DRAGON࿐' //Bot Pacage Name
global.author = '😎𝙆.𝙋𝙧𝙖𝙗𝙝𝙖𝙨𝙝𝙖❯❯' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '©_Kumuthu.' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = 'https://github.com/prabhasha2006' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
