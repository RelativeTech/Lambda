( window[ "canvasWebpackJsonp" ] = window[ "canvasWebpackJsonp" ] || [] ).push( [
  [ 110 ], {
    "7LJr": function ( e, t, i ) {
      "use strict"
      var a = i( "ouhR" )
      var n = i.n( a )
      n.a.fn.loadingImg = function ( e ) {
        if ( !this || 0 === this.length ) return this
        const t = window.getComputedStyle( this[ 0 ] ).direction || "ltr"
        const i = this.filter( ":first" )
        let a
        if ( "hide" === e || "remove" === e ) {
          i.children( ".loading_image" ).remove()
          a = i.data( "loading_images" ) || []
          a.forEach( e => {
            e && e.remove()
          } )
          i.data( "loading_images", null )
          this.css( "margin-inline-end", "" )
          return this
        }
        if ( "remove_once" === e ) {
          i.children( ".loading_image" ).remove()
          a = i.data( "loading_images" ) || []
          const e = a.pop()
          e && e.remove()
          i.data( "loading_images", a )
          return this
        }
        if ( "register_image" === e && 3 === arguments.length ) {
          n.a.fn.loadingImg.image_files[ arguments[ 1 ] ] = arguments[ 2 ]
          return this
        }
        e = n.a.extend( {}, n.a.fn.loadingImg.defaults, e )
        let o = n.a.fn.loadingImg.image_files.normal
        e.image_size && n.a.fn.loadingImg.image_files[ e.image_size ] && ( o = n.a.fn.loadingImg.image_files[ e.image_size ] )
        e.paddingTop && ( e.vertical = e.paddingTop )
        let s = 0
        if ( e.vertical )
          if ( "top" === e.vertical );
          else if ( "bottom" === e.vertical ) s = i.outerHeight()
        else if ( "middle" === e.vertical ) s = i.outerHeight() / 2 - o.height / 2
        else {
          s = parseInt( e.vertical, 10 )
          isNaN( s ) && ( s = 0 )
        }
        let r = 0
        if ( e.horizontal )
          if ( "left" === e.horizontal );
          else if ( "right" === e.horizontal ) r = i.outerWidth() - o.width
        else if ( "right!" === e.horizontal ) {
          r = "ltr" === t ? i.outerWidth() + 5 : -5 - ( o.width || 16 )
          this.css( {
            "margin-inline-end": "16px"
          } )
        } else if ( "middle" === e.horizontal ) r = i.outerWidth() / 2 - o.width / 2
        else {
          r = parseInt( e.horizontal, 10 )
          isNaN( r ) && ( r = 0 )
        }
        const l = i.zIndex() + 1
        const u = n()( document.createElement( "div" ) ).addClass( "loading_image_holder" )
        const d = n()( document.createElement( "img" ) ).attr( "src", o.url )
        u.append( d )
        a = i.data( "loading_images" ) || []
        a.push( u )
        i.data( "loading_images", a )
        if ( i.css( "position" ) && "static" !== i.css( "position" ) ) {
          u.css( {
            zIndex: l,
            position: "absolute",
            top: s,
            left: r
          } )
          i.append( u )
        } else {
          const t = i.offset()
          let a = t.top,
            o = t.left
          e.vertical && ( a += s )
          e.horizontal && ( o += r )
          u.css( {
            zIndex: l,
            position: "absolute",
            top: a,
            left: o
          } )
          n()( "body" ).append( u )
        }
        return n()( this )
      }
      n.a.fn.loadingImg.defaults = {
        paddingTop: 0,
        image_size: "normal",
        vertical: 0,
        horizontal: 0
      }
      n.a.fn.loadingImg.image_files = {
        normal: {
          url: "/images/ajax-loader.gif",
          width: 32,
          height: 32
        },
        small: {
          url: "/images/ajax-loader-small.gif",
          width: 16,
          height: 16
        }
      }
      n.a.fn.loadingImage = n.a.fn.loadingImg
    },
    "7WS/": function ( e, t, i ) {
      "use strict"
      var a = i( "pQTu" )
      var n = i( "m0r6" )
      Object( n[ "a" ] )( JSON.parse( '{"ar":{"play_media_comment_35257210":"تشغيل تعليق الوسائط.","play_media_comment_by_name_from_createdat_515b3b":"تشغيل تعليق الوسائط بواسطة %{name} من %{createdAt}."},"ca":{"play_media_comment_35257210":"Reprodueix el comentari multimèdia.","play_media_comment_by_name_from_createdat_515b3b":"Reprodueix el comentari multimèdia de %{name} enviat el %{createdAt}."},"cy":{"play_media_comment_35257210":"Chwarae sylw ar gyfryngau.","play_media_comment_by_name_from_createdat_515b3b":"Chwarae sylw ar gyfryngau gan %{name} o %{createdAt}."},"da":{"play_media_comment_35257210":"Afspil medie kommentar.","play_media_comment_by_name_from_createdat_515b3b":"Afspil mediekommentar af %{name} fra %{createdAt}."},"da-x-k12":{"play_media_comment_35257210":"Afspil medie kommentar.","play_media_comment_by_name_from_createdat_515b3b":"Afspil mediekommentar af %{name} fra %{createdAt}."},"de":{"play_media_comment_35257210":"Medienkommentar wiedergeben","play_media_comment_by_name_from_createdat_515b3b":"Medienkommentar durch %{name} von %{createdAt} wiedergeben."},"en-AU":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-AU-x-unimelb":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-CA":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-GB":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-GB-x-lbs":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-GB-x-ukhe":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"es":{"play_media_comment_35257210":"Reproducir comentario de multimedia.","play_media_comment_by_name_from_createdat_515b3b":"Reproducir comentario de multimedia de %{name} desde %{createdAt}."},"fa":{"play_media_comment_35257210":"پخش نظر رسانه ای","play_media_comment_by_name_from_createdat_515b3b":" نظر رسانه‌ای %{name} را  از %{createdAt} پخش کنید."},"fi":{"play_media_comment_35257210":"Toista mediakommentti.","play_media_comment_by_name_from_createdat_515b3b":"Toista mediakommentti %{name} kohteesta %{createdAt}."},"fr":{"play_media_comment_35257210":"Lancer le commentaire sur média.","play_media_comment_by_name_from_createdat_515b3b":"Lancer le commentaire sur média par %{name} à partir de %{createdAt}."},"fr-CA":{"play_media_comment_35257210":"Lire le commentaire du support","play_media_comment_by_name_from_createdat_515b3b":"Lire le commentaire du support par %{name} du %{createdAt}."},"ht":{"play_media_comment_35257210":"Jwe kòmantè medya.","play_media_comment_by_name_from_createdat_515b3b":"Jwe kòmantè medya pa %{name} de %{createdAt}."},"is":{"play_media_comment_35257210":"Spila miðilsathugasemd.","play_media_comment_by_name_from_createdat_515b3b":"Spila miðilsathugasemd eftir %{name} frá %{createdAt}."},"it":{"play_media_comment_35257210":"Commento sulla riproduzione del contenuto multimediale.","play_media_comment_by_name_from_createdat_515b3b":"Commento sulla riproduzione del contenuto multimediale da parte di %{name} da %{createdAt}."},"ja":{"play_media_comment_35257210":"メディア コメントの再生。","play_media_comment_by_name_from_createdat_515b3b":"%{name}まで%{createdAt}からのメディアのコメントを再生します。"},"mi":{"play_media_comment_35257210":"Mahia ngā korero pāpāho","play_media_comment_by_name_from_createdat_515b3b":"Mahia ngā korero pāpāho ma %{name} mai te %{createdAt}."},"nb":{"play_media_comment_35257210":"Spill mediainnhold","play_media_comment_by_name_from_createdat_515b3b":"Spill mediainnhold av %{name} fra %{createdAt}."},"nb-x-k12":{"play_media_comment_35257210":"Spill mediainnhold","play_media_comment_by_name_from_createdat_515b3b":"Spill mediainnhold av %{name} fra %{createdAt}."},"nl":{"play_media_comment_35257210":"Media-opmerking afspelen","play_media_comment_by_name_from_createdat_515b3b":"Speel media-opmerking door %{name} van %{createdAt} af."},"nn":{"play_media_comment_35257210":"Spel av medieinnhald.","play_media_comment_by_name_from_createdat_515b3b":"Spel av mediekommentar frå %{name} den %{createdAt}."},"pl":{"play_media_comment_35257210":"Odtwórz komentarz multimedialny.","play_media_comment_by_name_from_createdat_515b3b":"Odtwórz komentarz multimedialny %{name} z %{createdAt}."},"pt":{"play_media_comment_35257210":"Reproduzir comentário de mídia.","play_media_comment_by_name_from_createdat_515b3b":"Reproduzir comentários de mídia %{name} de %{createdAt}."},"pt-BR":{"play_media_comment_35257210":"Reproduzir comentário em mídia.","play_media_comment_by_name_from_createdat_515b3b":"Reproduzir comentário em mídia por %{name} de %{createdAt}."},"ru":{"play_media_comment_35257210":"Воспроизведение мультимедийного комментария.","play_media_comment_by_name_from_createdat_515b3b":"Воспроизвести мультимедийный комментарии %{name} из %{createdAt}."},"sl":{"play_media_comment_35257210":"Predvajaj komentar v obliki medija.","play_media_comment_by_name_from_createdat_515b3b":"Predvajaj komentar v obliki medija %{name}, ki je bil ustvarjen ob/dne %{createdAt}."},"sv":{"play_media_comment_35257210":"Spela upp mediekommentar.","play_media_comment_by_name_from_createdat_515b3b":"Spela upp mediekommentar av %{name} från %{createdAt}."},"sv-x-k12":{"play_media_comment_35257210":"Spela upp mediekommentar.","play_media_comment_by_name_from_createdat_515b3b":"Spela upp mediekommentar av %{name} från %{createdAt}."},"zh-Hans":{"play_media_comment_35257210":"播放媒体评论。","play_media_comment_by_name_from_createdat_515b3b":"播放%{name}的来自%{createdAt}的媒体评论。"},"zh-Hant":{"play_media_comment_35257210":"播放媒體評論。","play_media_comment_by_name_from_createdat_515b3b":"播放%{name}於%{createdAt}創建的媒體評論。"}}' ) )
      i( "jQeR" )
      i( "0sPK" )
      var o = a[ "default" ].scoped( "mediaCommentThumbnail" )
      var s = i( "GLiE" )
      var r = i.n( s )
      var l = i( "5Ky4" )
      var u = i( "ouhR" )
      var d = i.n( u )
      var _ = i( "hX7l" )
      const m = {
        normal: {
          width: 140,
          height: 100
        },
        small: {
          width: 70,
          height: 50
        }
      }

      function c( e, t, i ) {
        if ( !INST.kalturaSettings ) return console.log( "Kaltura has not been enabled for this account" )
        let a, n
        const s = d()( e )
        try {
          const e = document.createElement( "a" )
          e.href = s.attr( "href" )
          n = e
        } catch ( e ) {}
        if ( n && Object( _[ "a" ] )( n.search ).no_preview ) return
        const r = m[ t ] || m.normal
        const u = s.data( "media_comment_id" ) || d.a.trim( s.find( ".media_comment_id:first" ).text() ) || ( a = s.attr( "id" ) ) && a.match( /^media_comment_/ ) && a.substring( 14 ) || d.a.trim( s.parent().find( ".media_comment_id:first" ).text() )
        const c = s.data( "author" )
        const g = s.data( "created_at" )
        let h
        h = c && g ? o.t( "Play media comment by %{name} from %{createdAt}.", {
          name: c,
          createdAt: g
        } ) : o.t( "Play media comment." )
        if ( u ) {
          const e = "https://" + INST.kalturaSettings.resource_domain
          const a = `${e}/p/${INST.kalturaSettings.partner_id}/thumbnail/entry_id/${u}/width/${r.width}/height/${r.height}/bgcolor/000000/type/2/vid_sec/5`
          const n = d()( `<span\n        style='background-image: url(${Object(l["a"])(a)});'\n        class='media_comment_thumbnail media_comment_thumbnail-${Object(l["a"])(t)}'\n      >\n        <span class='media_comment_thumbnail_play_button'>\n          <span class='screenreader-only'>\n            ${Object(l["a"])(h)}\n          </span>\n        </span>\n      </span>` )
          const o = s.closest( "p" )
          o.attr( "title" ) || o.attr( "title", Object( l[ "a" ] )( h ) )
          let _ = s
          if ( i ) {
            _ = s.clone().empty().removeClass( "instructure_file_link" )
            const e = s.parent( ".instructure_file_link_holder" )
            e.length ? _.appendTo( e ) : s.after( _ )
          } else s.empty()
          _.data( "download", _.attr( "href" ) ).prop( "href", "#" ).addClass( "instructure_inline_media_comment" ).append( n ).css( {
            backgroundImage: "",
            padding: 0
          } )
        }
      }
      d.a.fn.mediaCommentThumbnail = function ( e = "normal", t ) {
        return this.each( ( function () {
          r.a.defer( c, this, e, t )
        } ) )
      }
    },
    OShF: function ( e, t, i ) {
      "use strict"
      var a = i( "ouhR" )
      var n = i.n( a )
      var o = i( "5Ky4" )
      i( "JI1W" )
      n.a.fn.fillTemplateData = function ( e ) {
        if ( this.length && e ) {
          e.iterator && this.find( "*" ).andSelf().each( ( function () {
            const t = n()( this )
            n.a.each( [ "name", "id", "class" ], ( i, a ) => {
              t.attr( a ) && t.attr( a, t.attr( a ).replace( /-iterator-/, e.iterator ) )
            } )
          } ) )
          e.id && this.attr( "id", e.id )
          let a = false
          if ( e.data )
            for ( var t in e.data ) {
              if ( e.except && -1 != n.a.inArray( t, e.except ) ) continue
              e.data[ t ] && e.dataValues && -1 != n.a.inArray( t, e.dataValues ) && this.data( t, e.data[ t ].toString() )
              const s = this.find( "." + t )
              var i = e.avoid || ""
              s.each( ( function () {
                const s = n()( this )
                if ( s.length > 0 && 0 === s.closest( i ).length ) {
                  "undefined" !== typeof e.data[ t ] && null !== e.data[ t ] || ( e.data[ t ] = "" )
                  if ( e.htmlValues && -1 != n.a.inArray( t, e.htmlValues ) ) {
                    s.html( n.a.raw( e.data[ t ].toString() ) )
                    if ( s.hasClass( "user_content" ) ) {
                      a = true
                      s.removeClass( "enhanced" )
                      s.data( "unenhanced_content_html", e.data[ t ].toString() )
                    }
                  } else if ( "INPUT" == s[ 0 ].tagName.toUpperCase() ) s.val( e.data[ t ] )
                  else try {
                    const i = e.data[ t ].toString()
                    s.html( Object( o[ "a" ] )( i ) )
                  } catch ( e ) {}
                }
              } ) )
            }
          e.hrefValues && e.data && this.find( "a,span[rel]" ).each( ( function () {
            let t, i, a, o = n()( this )
            for ( const s in e.hrefValues ) {
              if ( !e.hrefValues.hasOwnProperty( s ) ) continue
              const r = e.hrefValues[ s ]
              if ( t = o.attr( "href" ) ) {
                const i = n.a.replaceTags( t, r, encodeURIComponent( e.data[ r ] ) )
                const a = o.text() === o.html() ? o.text() : null
                if ( t !== i ) {
                  o.attr( "href", i )
                  a && o.text( a )
                }
              }( i = o.attr( "rel" ) ) && o.attr( "rel", n.a.replaceTags( i, r, e.data[ r ] ) );
              ( a = o.attr( "name" ) ) && o.attr( "name", n.a.replaceTags( a, r, e.data[ r ] ) )
            }
          } ) )
          a && n()( document ).triggerHandler( "user_content_change" )
        }
        return this
      }
      n.a.fn.fillTemplateData.defaults = {
        htmlValues: null,
        hrefValues: null
      }
      n.a.fn.getTemplateData = function ( e ) {
        if ( !this.length || !e ) return {}
        var t, i = {}
        if ( e.textValues ) {
          const t = this
          e.textValues.forEach( e => {
            const o = t.find( "." + e.replace( /\[/g, "\\[" ).replace( /\]/g, "\\]" ) + ":first" )
            a = n.a.trim( o.text() )
            "&nbsp;" === o.html() && ( a = "" )
            1 === a.length && 160 === a.charCodeAt( 0 ) && ( a = "" )
            i[ e ] = a
          } )
        }
        if ( e.dataValues )
          for ( t in e.dataValues ) {
            var a = this.data( e.dataValues[ t ] )
            a && ( i[ e.dataValues[ t ] ] = a )
          }
        if ( e.htmlValues )
          for ( t in e.htmlValues ) {
            const o = this.find( "." + e.htmlValues[ t ].replace( /\[/g, "\\[" ).replace( /\]/g, "\\]" ) + ":first" )
            a = null
            a = o.hasClass( "user_content" ) && o.data( "unenhanced_content_html" ) ? o.data( "unenhanced_content_html" ) : n.a.trim( o.html() )
            i[ e.htmlValues[ t ] ] = a
          }
        return i
      }
      n.a.fn.getTemplateValue = function ( e, t ) {
        const i = n.a.extend( {}, t, {
          textValues: [ e ]
        } )
        return this.getTemplateData( i )[ e ]
      }
    },
    TBRb: function ( e, t, i ) {
      "use strict"
      var a = i( "ouhR" )
      var n = i.n( a )
      var o = i( "GLiE" )
      var s = i.n( o )
      var r = i( "Nxtp" )
      i( "YGE8" )
      n.a.fn.fixDialogButtons = function () {
        return this.each( ( function () {
          const e = n()( this )
          const t = e.find( ".button-container:last .btn, button[type=submit]" )
          if ( t.length ) {
            e.find( ".button-container:last, button[type=submit]" ).hide()
            let i = n.a.map( t.toArray(), t => {
              const i = n()( t )
              let a = i.attr( "class" ) || ""
              const o = i.attr( "id" )
              if ( i.is( ".dialog_closer" ) ) {
                i.off( ".fixdialogbuttons" )
                i.on( "click.fixdialogbuttons", Object( r[ "a" ] )( () => e.dialog( "close" ) ) )
              }
              "submit" === i.prop( "type" ) && i[ 0 ].form && ( a += " button_type_submit" )
              return {
                text: i.text(),
                "data-text-while-loading": i.data( "textWhileLoading" ),
                click: () => i.click(),
                class: a,
                id: o
              }
            } )
            i = s.a.sortBy( i, e => e.class.match( /btn-primary/ ) ? 1 : 0 )
            e.dialog( "option", "buttons", i )
          }
        } ) )
      }
    },
    VNfg: function ( e, t, i ) {
      "use strict"
      i.d( t, "b", ( function () {
        return z
      } ) )
      i.d( t, "a", ( function () {
        return j
      } ) )
      var a = i( "rnoQ" )
      var n = i( "pQTu" )
      var o = i( "m0r6" )
      Object( o[ "a" ] )( JSON.parse( '{"ar":{"download_3e89bdef":"تنزيل","instructure_js":{"alerts":{"file_previews_disabled":"تم تعطيل معايانات الملف لموقع Canvas هذا"},"buttons":{"next_module":"الوحدة التالية","previous_module":"الوحدة السابقة"},"draft":"مسودة","errors":{"posting_message_failed":"فشل النشر، حاول مرة أخرى"},"links":{"minimize_file_preview":"تصغير معاينة الملف","minimize_youtube_video":"تصغير الفيديو","view_equella_content_in_new_window":"عرض المحتوى في نافذة جديدة"},"status":{"posting_message":"جارٍ نشر الرسالة..."},"switched_roles_message":{"designer":"لقد قمت بتبديل الأدوار مؤقتًا لهذا المساق، كما أنك الآن تعرض المساق باعتبارك مصممًا.  ويمكنك استعادة دورك وأذوناتك من الصفحة الرئيسية للمساق.","observer":"لقد قمت بتبديل الأدوار مؤقتًا لهذا المساق، كما أنك الآن تعرض المساق باعتبارك واحدًا من الملاحظين.  ويمكنك استعادة دورك وأذوناتك من الصفحة الرئيسية للمساق.","student":"لقد قمت بتبديل الأدوار مؤقتًا لهذا المساق، كما أنك الآن تعرض المساق باعتبارك طالبًا.  ويمكنك استعادة دورك وأذوناتك من الصفحة الرئيسية للمساق.","ta":"لقد قمت بتبديل الأدوار مؤقتًا لهذا المساق، كما أنك الآن تعرض المساق باعتبارك مساعد معلم.  ويمكنك استعادة دورك وأذوناتك من الصفحة الرئيسية للمساق.","teacher":"لقد قمت بتبديل الأدوار مؤقتًا لهذا المساق، كما أنك الآن تعرض المساق باعتبارك معلمًا.  ويمكنك استعادة دورك وأذوناتك من الصفحة الرئيسية للمساق."},"titles":{"equella_content_preview":"معاينة محتوى Equella","external_link":"ارتباطات إلى موقع خارجي.","preview_document":"معاينة المستند"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"حدث خطأ ما أثناء تحميل عارض الملفات.","this_image_is_currently_unavailable_25c68857":"هذه الصورة غير متوفرة حاليًا","time":{"count_hours_ago":{"one":"منذ ساعة مضت","other":"منذ %{count} ساعة مضت"},"count_minutes_ago":{"one":"منذ دقيقة مضت","other":"منذ %{count} دقيقة مضت"},"less_than_a_minute_ago":"منذ أقل من دقيقة"}},"ca":{"download_3e89bdef":"baixa","instructure_js":{"alerts":{"file_previews_disabled":"Les visualitzacions prèvies de fitxers s\'han inhabilitat per a aquest lloc del Canvas"},"buttons":{"next_module":"Mòdul següent","previous_module":"Mòdul anterior"},"draft":"Esborrany","errors":{"posting_message_failed":"No s\'ha pogut publicar, torneu-ho a provar"},"links":{"minimize_file_preview":"Minimitza la visualització prèvia del fitxer","minimize_youtube_video":"Minimitza el vídeo","view_equella_content_in_new_window":"visualitza el contingut en una finestra nova"},"status":{"posting_message":"S\'està publicant el missatge..."},"switched_roles_message":{"designer":"Heu canviat de rol temporalment per a aquest curs, i ara l\'esteu visualitzant com a dissenyador.  Podeu restaurar el vostre rol i els permisos des de la pàgina inicial del curs.","observer":"Heu canviat de rol temporalment per a aquest curs, i ara l\'esteu visualitzant com a observador.  Podeu restaurar el vostre rol i els permisos des de la pàgina inicial del curs.","student":"Heu canviat de rol temporalment per a aquest curs, i ara l\'esteu visualitzant com a estudiant.  Podeu restaurar el vostre rol i els permisos des de la pàgina inicial del curs.","ta":"Heu canviat de rol temporalment per a aquest curs, i ara l\'esteu visualitzant com a auxiliar de professor.  Podeu restaurar el vostre rol i els permisos des de la pàgina inicial del curs.","teacher":"Heu canviat de rol temporalment per a aquest curs, i ara l\'esteu visualitzant com a professor.  Podeu restaurar el vostre rol i els permisos des de la pàgina inicial del curs."},"titles":{"equella_content_preview":"Visualització prèvia del contingut de l\'Equella","external_link":"Enllaça a un lloc extern.","preview_document":"Visualització prèvia del fitxer"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"S’ha produït un error en carregar la visualització prèvia del fitxer.","this_image_is_currently_unavailable_25c68857":"En aquest moment, aquesta imatge no està disponible.","time":{"count_hours_ago":{"one":"fa una hora","other":"fa %{count} hores"},"count_minutes_ago":{"one":"fa un minut","other":"fa %{count} minuts"},"less_than_a_minute_ago":"fa menys d’un minut"}},"cy":{"download_3e89bdef":"llwytho i lawr","instructure_js":{"alerts":{"file_previews_disabled":"Mae’r nodwedd rhagolwg ffeil wedi’i hanalluogi ar gyfer y safle hwn ar Canvas"},"buttons":{"next_module":"Modiwl Nesaf","previous_module":"Modiwl Blaenorol"},"draft":"Drafft","errors":{"posting_message_failed":"Post wedi methu, rhowch gynnig arall arni"},"links":{"minimize_file_preview":"Lleihau’r Rhagolwg o’r Ffeil","minimize_youtube_video":"Lleihau Fideo","view_equella_content_in_new_window":"gweld y cynnwys mewn ffenestr newydd"},"status":{"posting_message":"Wrthi’n postio neges..."},"switched_roles_message":{"designer":"Rydych chi wedi newid rôl dros dro ar gyfer y cwrs hwn, ac rydych yn gweld y cwrs fel dylunydd erbyn hyn.  Gallwch adfer eich rôl a’ch hawliau ar dudalen hafan y cwrs.","observer":"Rydych chi wedi newid rôl dros dro ar gyfer y cwrs hwn, ac rydych yn gweld y cwrs fel arsyllwr erbyn hyn.  Gallwch adfer eich rôl a’ch hawliau ar dudalen hafan y cwrs.","student":"Rydych chi wedi newid rôl dros dro ar gyfer y cwrs hwn, ac rydych yn gweld y cwrs fel myfyriwr erbyn hyn.  Gallwch adfer eich rôl a’ch hawliau ar dudalen hafan y cwrs.","ta":"Rydych chi wedi newid rôl dros dro ar gyfer y cwrs hwn, ac rydych yn gweld y cwrs fel cynorthwyydd dysgu erbyn hyn.  Gallwch adfer eich rôl a’ch hawliau ar dudalen hafan y cwrs.","teacher":"Rydych chi wedi newid rôl dros dro ar gyfer y cwrs hwn, ac rydych yn gweld y cwrs fel athro erbyn hyn.  Gallwch adfer eich rôl a’ch hawliau ar dudalen hafan y cwrs."},"titles":{"equella_content_preview":"Rhagolwg o gynnwys EQUELLA","external_link":"Dolenni at safle allanol.","preview_document":"Gweld rhagolwg o’r ddogfen"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Aeth rhywbeth o’i le wrth lwytho’r rhaglen rhagweld ffeil.","this_image_is_currently_unavailable_25c68857":"Dydy\'r ddelwedd hon ddim ar gael ar hyn o bryd.","time":{"count_hours_ago":{"one":"1 awr yn ôl","other":"%{count} awr yn ôl"},"count_minutes_ago":{"one":"1 munud yn ôl","other":"%{count} munud yn ôl"},"less_than_a_minute_ago":"llai na munud yn ôl"}},"da":{"download_3e89bdef":"download","instructure_js":{"alerts":{"file_previews_disabled":"Fil-forhåndsvisning er blevet deaktiveret for denne Canvas-side"},"buttons":{"next_module":"Næste modul","previous_module":"Forrige modul"},"draft":"Kladde","errors":{"posting_message_failed":"Opslag mislykkedes, prøv igen"},"links":{"minimize_file_preview":"Minimer fil-forhåndsvisning","minimize_youtube_video":"Minimer video","view_equella_content_in_new_window":"vis indholdet i et nyt vindue"},"status":{"posting_message":"Lægger besked ud ..."},"switched_roles_message":{"designer":"Du har midlertidigt skiftet roller for dette fag og viser nu faget som designer.  Du kan gendanne din rolle og tilladelser fra fagets startside.","observer":"Du har midlertidigt skiftet roller for dette fag og viser nu faget som observatør.  Du kan gendanne din rolle og tilladelser fra fagets startside.","student":"Du har midlertidigt skiftet roller for dette fag og viser nu faget som studerende.  Du kan gendanne din rolle og tilladelser fra fagets startside.","ta":"Du har midlertidigt skiftet roller for dette fag og viser nu faget som undervisningsassistent.  Du kan gendanne din rolle og tilladelser fra fagets startside.","teacher":"Du har midlertidigt skiftet roller for dette fag og viser nu faget som lærer.  Du kan gendanne din rolle og tilladelser fra fagets startside."},"titles":{"equella_content_preview":"EQUELLA forhåndsvisning af indhold","external_link":"Links til en ekstern webside.","preview_document":"Forhåndsvisning af dokumentet"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Noget gik galt under indlæsning af forhåndsvisning af filer.","this_image_is_currently_unavailable_25c68857":"Dette billede er for øjeblikket ikke tilgængeligt","time":{"count_hours_ago":{"one":"For 1 time siden","other":"%{count} timer siden"},"count_minutes_ago":{"one":"For 1 minut siden","other":"For %{count} minutter siden"},"less_than_a_minute_ago":"for mindre en et minut siden"}},"da-x-k12":{"download_3e89bdef":"download","instructure_js":{"alerts":{"file_previews_disabled":"Fil-forhåndsvisning er blevet deaktiveret for denne Canvas-side"},"buttons":{"next_module":"Næste forløb","previous_module":"Forrige forløb"},"draft":"Kladde","errors":{"posting_message_failed":"Opslag mislykkedes, prøv igen"},"links":{"minimize_file_preview":"Minimer fil-forhåndsvisning","minimize_youtube_video":"Minimer video","view_equella_content_in_new_window":"vis indholdet i et nyt vindue"},"status":{"posting_message":"Lægger besked ud ..."},"switched_roles_message":{"designer":"Du har midlertidigt skiftet roller for dette fag og viser nu faget som designer.  Du kan gendanne din rolle og tilladelser fra fagets startside.","observer":"Du har midlertidigt skiftet roller for dette fag og viser nu faget som observatør.  Du kan gendanne din rolle og tilladelser fra fagets startside.","student":"Du har midlertidigt skiftet roller for dette fag og viser nu faget som elev.  Du kan gendanne din rolle og tilladelser fra fagets startside.","ta":"Du har midlertidigt skiftet roller for dette fag og viser nu faget som undervisningsassistent.  Du kan gendanne din rolle og tilladelser fra fagets startside.","teacher":"Du har midlertidigt skiftet roller for dette fag og viser nu faget som lærer.  Du kan gendanne din rolle og tilladelser fra fagets startside."},"titles":{"equella_content_preview":"EQUELLA forhåndsvisning af indhold","external_link":"Links til en ekstern webside.","preview_document":"Forhåndsvisning af dokumentet"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Noget gik galt under indlæsning af forhåndsvisning af filer.","this_image_is_currently_unavailable_25c68857":"Dette billede er for øjeblikket ikke tilgængeligt","time":{"count_hours_ago":{"one":"For 1 time siden","other":"%{count} timer siden"},"count_minutes_ago":{"one":"For 1 minut siden","other":"For %{count} minutter siden"},"less_than_a_minute_ago":"for mindre en et minut siden"}},"de":{"download_3e89bdef":"herunterladen","instructure_js":{"alerts":{"file_previews_disabled":"Die Dateivorschaufunktion wurde für diese Canvas-Seite deaktiviert."},"buttons":{"next_module":"Nächstes Modul","previous_module":"Vorheriges Modul"},"draft":"Entwurf","errors":{"posting_message_failed":"Post fehlgeschlagen, bitte erneut versuchen"},"links":{"minimize_file_preview":"Dateivorschau minimieren","minimize_youtube_video":"Video minimieren","view_equella_content_in_new_window":"Inhalt in neuem Fenster anzeigen"},"status":{"posting_message":"Nachricht wird gepostet ..."},"switched_roles_message":{"designer":"Sie haben für diesen Kurs vorübergehend die Rollen getauscht und sehen den Kurs nun als Designer.  Sie können Rolle und Berechtigungen auf der Kursstartseite wiederherstellen.","observer":"Sie haben für diesen Kurs vorübergehend die Rollen getauscht und sehen den Kurs nun als Beobachter.  Sie können Rolle und Berechtigungen auf der Kursstartseite wiederherstellen.","student":"Sie haben für diesen Kurs vorübergehend die Rollen getauscht und sehen den Kurs nun als Student.  Sie können Rolle und Berechtigungen auf der Kursstartseite wiederherstellen.","ta":"Sie haben für diesen Kurs vorübergehend die Rollen getauscht und sehen den Kurs nun als Lehrassistent.  Sie können Rolle und Berechtigungen auf der Kursstartseite wiederherstellen.","teacher":"Sie haben für diesen Kurs vorübergehend die Rollen getauscht und sehen den Kurs nun als Dozent.  Sie können Rolle und Berechtigungen auf der Kursstartseite wiederherstellen."},"titles":{"equella_content_preview":"Vorschau für Equella-Content","external_link":"Links zu einer externen Website","preview_document":"Dokument als Vorschau anzeigen"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Fehler beim Laden der Dateivorschau.","this_image_is_currently_unavailable_25c68857":"Dieses Bild ist momentan nicht verfügbar.","time":{"count_hours_ago":{"one":"vor 1 Stunde","other":"vor %{count} Stunden"},"count_minutes_ago":{"one":"vor 1 Minute","other":"vor %{count} Minuten"},"less_than_a_minute_ago":"vor weniger als einer Minute"}},"el":{"instructure_js":{"alerts":{"file_previews_disabled":"Οι προεπισκοπήσεις αρχείων είναι απενεργοποιημένες για αυτή την ιστοσελίδα Canvas"},"buttons":{"next_module":"Επόμενη Ενότητα","previous_module":"Προηγούμενη Ενότητα"},"draft":"Προσχέδιο","errors":{"posting_message_failed":"Η Δημοσίευση Απέτυχε. Δοκιμάστε Ξανά."},"links":{"minimize_file_preview":"Ελαχιστοποίηση Προεπισκόπησης Αρχείου","minimize_youtube_video":"Ελαχιστοποίηση Βίντεο","view_equella_content_in_new_window":"Προβολή του περιεχομένου σε νέο παράθυρο"},"status":{"posting_message":"Δημοσίευση Μηνύματος..."},"switched_roles_message":{"designer":"\\u003cmrk mid=\\"1421\\" mtype=\\"seg\\"\\u003eΈχετε αλλάξει προσωρινά ρόλους για αυτό το μάθημα και τώρα βλέπετε αυτό το μάθημα ως σχεδιαστής.\\u003c/mrk\\u003e  \\u003cmrk mid=\\"1422\\" mtype=\\"seg\\"\\u003eΜπορείτε να επαναφέρετε τον ρόλο και τα δικαιώματά σας από την αρχική σελίδα του μαθήματος.\\u003c/mrk\\u003e","observer":"\\u003cmrk mid=\\"1423\\" mtype=\\"seg\\"\\u003eΈχετε αλλάξει προσωρινά ρόλους για αυτό το μάθημα και τώρα βλέπετε αυτό το μάθημα ως παρατηρητής.\\u003c/mrk\\u003e  \\u003cmrk mid=\\"1424\\" mtype=\\"seg\\"\\u003eΜπορείτε να επαναφέρετε τον ρόλο και τα δικαιώματά σας από την αρχική σελίδα του μαθήματος.\\u003c/mrk\\u003e","student":"\\u003cmrk mid=\\"1425\\" mtype=\\"seg\\"\\u003eΈχετε αλλάξει προσωρινά ρόλους για αυτό το μάθημα και τώρα βλέπετε αυτό το μάθημα ως σπουδαστής.\\u003c/mrk\\u003e  \\u003cmrk mid=\\"1426\\" mtype=\\"seg\\"\\u003eΜπορείτε να επαναφέρετε τον ρόλο και τα δικαιώματά σας από την αρχική σελίδα του μαθήματος.\\u003c/mrk\\u003e","ta":"\\u003cmrk mid=\\"1427\\" mtype=\\"seg\\"\\u003eΈχετε αλλάξει προσωρινά ρόλους για αυτό το μάθημα και τώρα βλέπετε αυτό το μάθημα ως βοηθός διδασκαλίας.\\u003c/mrk\\u003e  \\u003cmrk mid=\\"1428\\" mtype=\\"seg\\"\\u003eΜπορείτε να επαναφέρετε τον ρόλο και τα δικαιώματά σας από την αρχική σελίδα του μαθήματος.\\u003c/mrk\\u003e","teacher":"\\u003cmrk mid=\\"1429\\" mtype=\\"seg\\"\\u003eΈχετε αλλάξει προσωρινά ρόλους για αυτό το μάθημα και τώρα βλέπετε αυτό το μάθημα ως καθηγητής.\\u003c/mrk\\u003e  \\u003cmrk mid=\\"1430\\" mtype=\\"seg\\"\\u003eΜπορείτε να επαναφέρετε τον ρόλο και τα δικαιώματά σας από την αρχική σελίδα του μαθήματος.\\u003c/mrk\\u003e"},"titles":{"equella_content_preview":"Προεπισκόπιση Περιεχομένου του Equella","external_link":"Σύνδεσμοι σε εξωτερική ιστοσελίδα.","preview_document":"Προεπισκόπιση αρχείου"}},"time":{"count_hours_ago":{"one":"1 ώρα πριν","other":"%{count} ώρες πριν"},"count_minutes_ago":{"one":"1 λεπτό πριν","other":"%{count} λεπτά πριν"},"less_than_a_minute_ago":"λιγότερο από ένα λεπτό πριν"}},"en-AU":{"download_3e89bdef":"download","instructure_js":{"alerts":{"file_previews_disabled":"File previews have been disabled for this Canvas site"},"buttons":{"next_module":"Next Module","previous_module":"Previous Module"},"draft":"Draft","errors":{"posting_message_failed":"Post Failed, Try Again"},"links":{"minimize_file_preview":"Minimize File Preview","minimize_youtube_video":"Minimize Video","view_equella_content_in_new_window":"view the content in a new window"},"status":{"posting_message":"Posting Message..."},"switched_roles_message":{"designer":"You have switched roles temporarily for this course, and are now viewing the course as a designer.  You can restore your role and permissions from the course home page.","observer":"You have switched roles temporarily for this course, and are now viewing the course as an observer.  You can restore your role and permissions from the course home page.","student":"You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.","ta":"You have switched roles temporarily for this course, and are now viewing the course as a TA.  You can restore your role and permissions from the course home page.","teacher":"You have switched roles temporarily for this course, and are now viewing the course as a teacher.  You can restore your role and permissions from the course home page."},"titles":{"equella_content_preview":"Equella Content Preview","external_link":"Links to an external site.","preview_document":"Preview the document"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Something went wrong loading the file previewer.","this_image_is_currently_unavailable_25c68857":"This image is currently unavailable","time":{"count_hours_ago":{"one":"1 hour ago","other":"%{count} hours ago"},"count_minutes_ago":{"one":"1 minute ago","other":"%{count} minutes ago"},"less_than_a_minute_ago":"less than a minute ago"}},"en-AU-x-unimelb":{"download_3e89bdef":"download","instructure_js":{"alerts":{"file_previews_disabled":"File previews have been disabled for this Canvas site"},"buttons":{"next_module":"Next Module","previous_module":"Previous Module"},"draft":"Draft","errors":{"posting_message_failed":"Post Failed, Try Again"},"links":{"minimize_file_preview":"Minimize File Preview","minimize_youtube_video":"Minimize Video","view_equella_content_in_new_window":"view the content in a new window"},"status":{"posting_message":"Posting Message..."},"switched_roles_message":{"designer":"You have switched roles temporarily for this subject, and are now viewing the subject as a designer.  You can restore your role and permissions from the subject home page.","observer":"You have switched roles temporarily for this subject, and are now viewing the subject as an auditor.  You can restore your role and permissions from the subject home page.","student":"You have switched roles temporarily for this subject, and are now viewing the subject as a student.  You can restore your role and permissions from the subject home page.","ta":"You have switched roles temporarily for this subject, and are now viewing the subject as a tutor.  You can restore your role and permissions from the subject home page.","teacher":"You have switched roles temporarily for this subject, and are now viewing the subject as an instructor.  You can restore your role and permissions from the subject home page."},"titles":{"equella_content_preview":"Equella Content Preview","external_link":"Links to an external site.","preview_document":"Preview the document"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Something went wrong loading the file previewer.","this_image_is_currently_unavailable_25c68857":"This image is currently unavailable","time":{"count_hours_ago":{"one":"1 hour ago","other":"%{count} hours ago"},"count_minutes_ago":{"one":"1 minute ago","other":"%{count} minutes ago"},"less_than_a_minute_ago":"less than a minute ago"}},"en-CA":{"download_3e89bdef":"download","instructure_js":{"alerts":{"file_previews_disabled":"File previews have been disabled for this Canvas site"},"buttons":{"next_module":"Next Module","previous_module":"Previous Module"},"draft":"Draft","errors":{"posting_message_failed":"Post Failed, Try Again"},"links":{"minimize_file_preview":"Minimize File Preview","minimize_youtube_video":"Minimize Video","view_equella_content_in_new_window":"view the content in a new window"},"status":{"posting_message":"Posting Message..."},"switched_roles_message":{"designer":"You have switched roles temporarily for this course, and are now viewing the course as a designer.  You can restore your role and permissions from the course home page.","observer":"You have switched roles temporarily for this course, and are now viewing the course as an observer.  You can restore your role and permissions from the course home page.","student":"You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.","ta":"You have switched roles temporarily for this course, and are now viewing the course as a TA.  You can restore your role and permissions from the course home page.","teacher":"You have switched roles temporarily for this course, and are now viewing the course as a teacher.  You can restore your role and permissions from the course home page."},"titles":{"equella_content_preview":"Equella Content Preview","external_link":"Links to an external site.","preview_document":"Preview the document"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Someting went wrong loading the file previewer.","this_image_is_currently_unavailable_25c68857":"This image is currently unavailable","time":{"count_hours_ago":{"one":"1 hour ago","other":"%{count} hours ago"},"count_minutes_ago":{"one":"1 minute ago","other":"%{count} minutes ago"},"less_than_a_minute_ago":"less than a minute ago"}},"en-GB":{"download_3e89bdef":"download","instructure_js":{"alerts":{"file_previews_disabled":"File previews have been disabled for this Canvas site"},"buttons":{"next_module":"Next module","previous_module":"Previous module"},"draft":"Draft","errors":{"posting_message_failed":"Post failed. Try again"},"links":{"minimize_file_preview":"Minimise file preview","minimize_youtube_video":"Minimise video","view_equella_content_in_new_window":"view the content in a new window"},"status":{"posting_message":"Posting message..."},"switched_roles_message":{"designer":"You have switched roles temporarily for this course, and are now viewing the course as a designer.  You can restore your role and permissions from the course home page.","observer":"You have switched roles temporarily for this course, and are now viewing the course as a observer.  You can restore your role and permissions from the course home page.","student":"You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.","ta":"You have switched roles temporarily for this course, and are now viewing the course as a TA.  You can restore your role and permissions from the course home page.","teacher":"You have switched roles temporarily for this course, and are now viewing the course as a teacher.  You can restore your role and permissions from the course home page."},"titles":{"equella_content_preview":"Equella content preview","external_link":"Links to an external site.","preview_document":"Preview the document"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Something went wrong loading the file previewer.","this_image_is_currently_unavailable_25c68857":"This image is currently unavailable","time":{"count_hours_ago":{"one":"1 hour ago","other":"%{count} hours ago"},"count_minutes_ago":{"one":"1 minute ago","other":"%{count} minutes ago"},"less_than_a_minute_ago":"less than a minute ago"}},"en-GB-x-lbs":{"time":{"count_hours_ago":{"one":"1 hour ago","other":"%{count} hours ago"},"count_minutes_ago":{"one":"1 minute ago","other":"%{count} minutes ago"},"less_than_a_minute_ago":"less than a minute ago"}},"en-GB-x-ukhe":{"download_3e89bdef":"download","instructure_js":{"alerts":{"file_previews_disabled":"File previews have been disabled for this Canvas site"},"buttons":{"next_module":"Next unit","previous_module":"Previous unit"},"draft":"Draft","errors":{"posting_message_failed":"Post failed. Try again"},"links":{"minimize_file_preview":"Minimise file preview","minimize_youtube_video":"Minimise video","view_equella_content_in_new_window":"view the content in a new window"},"status":{"posting_message":"Posting message..."},"switched_roles_message":{"designer":"You have switched roles temporarily for this module, and are now viewing the module as a designer.  You can restore your role and permissions from the module home page.","observer":"You have switched roles temporarily for this module, and are now viewing the module as a observer.  You can restore your role and permissions from the module home page.","student":"You have switched roles temporarily for this module, and are now viewing the module as a student.  You can restore your role and permissions from the module home page.","ta":"You have switched roles temporarily for this module, and are now viewing the module as a TA.  You can restore your role and permissions from the module home page.","teacher":"You have switched roles temporarily for this module, and are now viewing the module as a teacher.  You can restore your role and permissions from the module home page."},"titles":{"equella_content_preview":"Equella content preview","external_link":"Links to an external site.","preview_document":"Preview the document"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Something went wrong loading the file previewer.","this_image_is_currently_unavailable_25c68857":"This image is currently unavailable","time":{"count_hours_ago":{"one":"1 hour ago","other":"%{count} hours ago"},"count_minutes_ago":{"one":"1 minute ago","other":"%{count} minutes ago"},"less_than_a_minute_ago":"less than a minute ago"}},"es":{"download_3e89bdef":"descargar","instructure_js":{"alerts":{"file_previews_disabled":"Vista previa de archivos ha sido desactivada para este sitio de Canvas"},"buttons":{"next_module":"Módulo siguiente","previous_module":"Módulo anterior"},"draft":"Borrador","errors":{"posting_message_failed":"Contribución falló; intente de nuevo"},"links":{"minimize_file_preview":"Minimice la vista previa del archivo","minimize_youtube_video":"Minimice el video","view_equella_content_in_new_window":"ver el contenido en una ventana nueva"},"status":{"posting_message":"Publicando mensaje..."},"switched_roles_message":{"designer":"Ha cambiado los roles temporalmente para este curso y ahora lo está viendo como un diseñador.  Puede restaurar su rol y permisos desde la página de inicio de su curso.","observer":"Ha cambiado los roles temporalmente para este curso y ahora lo está viendo como un observador.  Puede restaurar su rol y permisos desde la página de inicio de su curso.","student":"Ha cambiado los roles temporalmente para este curso y ahora lo está viendo como un estudiante.  Puede restaurar su rol y permisos desde la página de inicio de su curso.","ta":"Ha cambiado los roles temporalmente para este curso y ahora lo está viendo como un profesor auxiliar.  Puede restaurar su rol y permisos desde la página de inicio de su curso.","teacher":"Ha cambiado los roles temporalmente para este curso y ahora lo está viendo como un profesor.  Puede restaurar su rol y permisos desde la página de inicio de su curso."},"titles":{"equella_content_preview":"Vista previa de contenido de Equella","external_link":"Enlaces a un sitio externo.","preview_document":"Vista previa del documento"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Ocurrió un error al cargar la vista previa del archivo.","this_image_is_currently_unavailable_25c68857":"Esta imagen no está disponible actualmente","time":{"count_hours_ago":{"one":"hace 1 hora","other":"hace %{count} horas"},"count_minutes_ago":{"one":"hace 1 minuto","other":"hace %{count} minutos"},"less_than_a_minute_ago":"hace menos de un minuto"}},"fa":{"instructure_js":{"alerts":{"file_previews_disabled":"پیش نمایش فایل ها برای این تارنمای کانواس غیر فعال شده است"},"buttons":{"next_module":"ماژول بعدی","previous_module":"ماژول قبلی"},"draft":"پیش نویس","errors":{"posting_message_failed":"ارسال انجام نشد، دوباره سعی کنید"},"links":{"minimize_file_preview":"کمینه کردن پیش نمایش فایل","minimize_youtube_video":"کمینه کردن تصویر","view_equella_content_in_new_window":"مشاهده محتوا در پنجره جدید"},"status":{"posting_message":"درحال ارسال پیام..."},"switched_roles_message":{"designer":"نقش های مربوط به این درس را به طور موقتی تغییر داده اید و اکنون درس را به عنوان یک طراح مشاهده می کنید. می توانید نقش و مجوزهای خود را از صفحه اصلی درس بازیابی کنید.","observer":"نقش های مربوط به این درس را به طور موقتی تغییر داده اید و اکنون درس را به عنوان یک بیننده مشاهده می کنید. می توانید نقش و مجوزهای خود را از صفحه اصلی درس بازیابی کنید.","student":"نقش های مربوط به این درس را به طور موقتی تغییر داده اید و اکنون درس را به عنوان یک دانشجو مشاهده می کنید. می توانید نقش و مجوزها را از صفحه اصلی درس بازیابی کنید.","ta":"نقش های مربوط به این درس را تغییر داده اید و اکنون درس را به عنوان یک دستیار آموزشی مشاهده می کنید. می توانید نقش و مجوزهای خود را از صفحه اصلی درس بازیابی کنید.","teacher":"نقش های مربوط به این درس را به طور موقتی تغییر داده اید و اکنون درس را به عنوان یک استاد مشاهده می کنید. می توانید نقش و مجوزهای خود را از صفحه اصلی درس بازیابی کنید."},"titles":{"equella_content_preview":"پیش نمایش محتوای Equella","external_link":"به یک تارنمای بیرونی پیوند می شود.","preview_document":"پیش نمایش سند"}},"time":{"count_hours_ago":{"one":"%{count} ساعت قبل","other":"%{count} ساعت قبل"},"count_minutes_ago":{"one":"%{count} دقیقه قبل","other":"%{count} دقیقه قبل"},"less_than_a_minute_ago":"کمتر از یک دقیقه پیش"}},"fi":{"download_3e89bdef":"lataa","instructure_js":{"alerts":{"file_previews_disabled":"Tiedoston esikatselut on poistettu käytöstä tällä Canvas-sivulla"},"buttons":{"next_module":"Seuraava moduuli","previous_module":"Edellinen moduuli"},"draft":"Luonnos","errors":{"posting_message_failed":"Lähetys epäonnistui, yritä uudelleen"},"links":{"minimize_file_preview":"Minimoi tiedoston esikatselu","minimize_youtube_video":"Minimoi video","view_equella_content_in_new_window":"näytä sisältö uudessa ikkunassa"},"status":{"posting_message":"Viestiä lähetetään..."},"switched_roles_message":{"designer":"Olet tilapäisesti vaihtanut rooleja tällä kurssilla ja tarkastelet tätä kurssia nyt suunnittelijana.  Voit palauttaa roolisi ja käyttöoikeutesi kurssin aloitussivulta.","observer":"Olet tilapäisesti vaihtanut rooleja tällä kurssilla ja tarkastelet tätä kurssia nyt tarkkailijana.  Voit palauttaa roolisi ja käyttöoikeutesi kurssin aloitussivulta.","student":"Olet tilapäisesti vaihtanut rooleja tällä kurssilla ja tarkastelet tätä kurssia nyt opiskelijana.  Voit palauttaa roolisi ja käyttöoikeutesi kurssin aloitussivulta.","ta":"Olet tilapäisesti vaihtanut rooleja tällä kurssilla ja tarkastelet tätä kurssia nyt apuopettajana.  Voit palauttaa roolisi ja käyttöoikeutesi kurssin aloitussivulta.","teacher":"Olet tilapäisesti vaihtanut rooleja tällä kurssilla ja tarkastelet tätä kurssia nyt opettajana.  Voit palauttaa roolisi ja käyttöoikeutesi kurssin aloitussivulta."},"titles":{"equella_content_preview":"Equella-sisällön esikatselu","external_link":"Linkittyy ulkoiselle sivustolle.","preview_document":"Esikatsele asiakirjaa"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Jotakin meni pieleen esikatselutoimintoa ladatessa.","this_image_is_currently_unavailable_25c68857":"Tämä kuva ei ole tällä hetkellä saatavissa","time":{"count_hours_ago":{"one":"1 tunti sitten","other":"%{count} tuntia sitten"},"count_minutes_ago":{"one":"1 minuutti sitten","other":"%{count} minuuttia sitten"},"less_than_a_minute_ago":"alle minuutti sitten"}},"fr":{"download_3e89bdef":"télécharger","instructure_js":{"alerts":{"file_previews_disabled":"Le mode aperçu des fichiers a été désactivé sur le site Canvas."},"buttons":{"next_module":"Module suivant","previous_module":"Module précédent"},"draft":"Brouillon","errors":{"posting_message_failed":"Échec de la publication, veuillez réessayer"},"links":{"minimize_file_preview":"Réduire l’aperçu du fichier","minimize_youtube_video":"Réduire la vidéo","view_equella_content_in_new_window":"afficher le contenu dans une nouvelle fenêtre"},"status":{"posting_message":"Envoi d’un message..."},"switched_roles_message":{"designer":"Vous avez temporairement modifié les rôles pour ce cours et pouvez l’afficher en tant que concepteur.  Vous pourrez rétablir votre rôle et vos autorisations dans la page d’accueil du cours.","observer":"Vous avez temporairement modifié les rôles pour ce cours et pouvez l’afficher en tant qu’observateur.  Vous pourrez rétablir votre rôle et vos autorisations dans la page d’accueil du cours.","student":"Vous avez temporairement modifié les rôles pour ce cours et pouvez l’afficher en tant qu’étudiant.  Vous pourrez rétablir votre rôle et vos autorisations dans la page d’accueil du cours.","ta":"Vous avez temporairement modifié les rôles pour ce cours et pouvez l’afficher en tant qu’aide-enseignant.  Vous pourrez rétablir votre rôle et vos autorisations dans la page d’accueil du cours.","teacher":"Vous avez temporairement modifié les rôles pour ce cours et pouvez l’afficher en tant qu’enseignant.  Vous pourrez rétablir votre rôle et vos autorisations dans la page d’accueil du cours."},"titles":{"equella_content_preview":"Aperçu du contenu d’Equella","external_link":"Connexions vers un site externe.","preview_document":"Afficher un aperçu du document"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Un problème est survenu lors du prévisualisateur de fichiers.","this_image_is_currently_unavailable_25c68857":"Cette image n’est pas disponible pour le moment.","time":{"count_hours_ago":{"one":"il y a 1 heure","other":"il y a %{count} heures"},"count_minutes_ago":{"one":"il y a 1 minute","other":"il y a %{count} minutes"},"less_than_a_minute_ago":"il y a moins d’1 minute"}},"fr-CA":{"download_3e89bdef":"télécharger","instructure_js":{"alerts":{"file_previews_disabled":"Le mode aperçu des fichiers a été désactivé sur le site Canvas."},"buttons":{"next_module":"Module suivant","previous_module":"Module précédent"},"draft":"Ébauche","errors":{"posting_message_failed":"Échec de la publication, veuillez réessayer"},"links":{"minimize_file_preview":"Réduire l’aperçu du fichier","minimize_youtube_video":"Réduire la vidéo","view_equella_content_in_new_window":"afficher le contenu dans une nouvelle fenêtre"},"status":{"posting_message":"Envoi d’un message..."},"switched_roles_message":{"designer":"Vous avez temporairement modifié les rôles pour ce cours et pouvez l’afficher en tant que concepteur.  Vous pourrez rétablir votre rôle et vos autorisations dans la page d’accueil du cours.","observer":"Vous avez temporairement modifié les rôles pour ce cours et pouvez l’afficher en tant qu’observateur.  Vous pourrez rétablir votre rôle et vos autorisations dans la page d’accueil du cours.","student":"Vous avez temporairement modifié les rôles pour ce cours et pouvez l’afficher en tant qu’étudiant.  Vous pourrez rétablir votre rôle et vos autorisations dans la page d’accueil du cours.","ta":"Vous avez temporairement modifié les rôles pour ce cours et pouvez l’afficher en tant qu’aide-enseignant.  Vous pourrez rétablir votre rôle et vos autorisations dans la page d’accueil du cours.","teacher":"Vous avez temporairement modifié les rôles pour ce cours et pouvez l’afficher en tant qu’enseignant.  Vous pourrez rétablir votre rôle et vos autorisations dans la page d’accueil du cours."},"titles":{"equella_content_preview":"Aperçu du contenu d’Equella","external_link":"Liens vers un site externe.","preview_document":"Afficher un aperçu du document"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Une erreur est survenue lors du chargement de l’aperçu du fichier.","this_image_is_currently_unavailable_25c68857":"Ce image n’est pas actuellement disponible","time":{"count_hours_ago":{"one":"il y a 1 heure","other":"il y a %{count} heures"},"count_minutes_ago":{"one":"il y a 1 minute","other":"il y a %{count} minutes"},"less_than_a_minute_ago":"il y a moins d’une minute"}},"he":{"instructure_js":{"alerts":{"file_previews_disabled":"תצוגה מוקדמת של קבצים אינה מופעלת באתר קנבס זה."},"buttons":{"next_module":"המודול הבא","previous_module":"המודול הקודם"},"draft":"טיוטה","errors":{"posting_message_failed":"הפרסום נכשל, יש לנסות שוב"},"links":{"minimize_file_preview":"מיזעור חלון תצוגה מקדימה של קובץ","minimize_youtube_video":"מיזעור וידאו","view_equella_content_in_new_window":"תצוגת התוכן בחלון חדש"},"status":{"posting_message":"מפרסם הודעה..."},"switched_roles_message":{"designer":"החלפת תפקידים באופן זמני לקורס זה, וכעת מתפקד/ת כתכנן/ת. ניתן לחזור לתפקיד הקודם על הרשאותיו מדף הבית","observer":"החלפת תפקידים באופן זמני לקורס זה, וכעת הנך מתפקד/ת כמשקיף/ה. ניתן לשחזר את תפקידך הקודם והרשאותיו מדף הבית של הקורס","student":"החלפת תפקידים באופן זמני לקורס זה, וכעת הנך מתפקד/ת כתלמיד/ה. ניתן לשחזר תפקיד קודם והרשאותיו מדף הבית של הקורס","ta":"החלפת תפקידים באופן זמני לקורס זה, וכעת הנך מתפקד/ת כעוזר/ת הוראה. ניתן לשחזר תפקיד קודם והרשאותיו מדף הבית של הקורס","teacher":"החלפת תפקידים באופן זמני לקורס זה, וכעת הנך מתפקד/ת כמורה. ניתן לשחזר תפקיד קודם והרשאותיו מדף הבית של הקורס"},"titles":{"equella_content_preview":"תצוגה מוקדמת של תוכן Equella ","external_link":"קישורים לאתר חיצוני","preview_document":"תצוגה מוקדמת של המסמך"}},"time":{"count_hours_ago":{"one":"לפני שעה","other":"לפני %{count} שעות"},"count_minutes_ago":{"one":"לפני דקה","other":"לפני %{count} דקות"},"less_than_a_minute_ago":"לפני פחות מדקה"}},"ht":{"download_3e89bdef":"telechaje","instructure_js":{"alerts":{"file_previews_disabled":"Apèsi fichye dezaktive pou sit Canvas sa a"},"buttons":{"next_module":"Pwochen Modil","previous_module":"Ansyen Modil"},"draft":"Bouyon","errors":{"posting_message_failed":"Pòs Echwe, Eseye Ankò"},"links":{"minimize_file_preview":"Minimize Apèsi Fichye","minimize_youtube_video":"Miminize Videyo","view_equella_content_in_new_window":"afiche kontni an nan yon nouvo fenèt"},"status":{"posting_message":"Poste Mesaj..."},"switched_roles_message":{"designer":"Ou chanje wòl yo tanporèman pou kou sa a, e y ap wè kou a kounye a tankou kreyatè.  Ou kapab restore wòl ak pèmisyon ou nan paj dakèy kou a.","observer":"Ou chanje wòl yo tanporèman pou kou sa a, e y ap wè kou a kounye a tankou yon obsèvatè.  Ou kapab restore wòl ak pèmisyon ou nan paj dakèy kou a.","student":"Ou chanje wòl yo tanporèman pou kou sa a, e y ap wè kou a kounye a tankou yon elèv.  Ou kapab restore wòl ak pèmisyon ou nan paj dakèy kou a.","ta":"Ou chanje wòl yo tanporèman pou kou sa a, e y ap wè kou a kounye a tankou yon AP.  Ou kapab restore wòl ak pèmisyon ou nan paj dakèy kou a.","teacher":"Ou chanje wòl yo tanporèman pou kou sa a, e y ap wè kou a kounye a tankou yon pwofesè.  Ou kapab restore wòl ak pèmisyon ou nan paj dakèy kou a."},"titles":{"equella_content_preview":"Apèsi Kontni Equella","external_link":"Lyen pou ale sou sit ekstèn.","preview_document":"Apèsi dokiman an"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Gen yon bagay ki mal pase pandan chajman apèsi fichye a.","this_image_is_currently_unavailable_25c68857":"Imaj sa a pa disponib pou kounye a","time":{"count_hours_ago":{"one":"1 èdtan de sa","other":"%{count} èdtan de sa"},"count_minutes_ago":{"one":"1 minit de sa","other":"%{count} minit de sa"},"less_than_a_minute_ago":"mwens ke yon minit de sa"}},"hu":{"instructure_js":{"alerts":{"file_previews_disabled":"Ezen a Canvas oldalon a fájlok előnézete le van tiltva. "},"buttons":{"next_module":"Következő modul","previous_module":"Előző modul"},"draft":"Piszkozat","errors":{"posting_message_failed":"Sikertelen bejegyzés, próbálja újra "},"links":{"minimize_file_preview":"Fájl előnézet méretének csökkentése","minimize_youtube_video":"Videó méretének csökkentése","view_equella_content_in_new_window":"tartalom megtekintése új ablakban"},"status":{"posting_message":"Üzenet közzététele... "},"switched_roles_message":{"designer":"Ideiglenesen szerepkört váltott ezen a kurzuson, a kurzust jelenleg tervezőként tekinti meg. Visszaállíthatja a szerepkörét és jogosultságait a kurzus kezdőlapján.","observer":"Ideiglenesen szerepkört váltott ezen a kurzuson, a kurzust jelenleg megfigyelőként tekinti meg. Visszaállíthatja a szerepkörét és jogosultságait a kurzus kezdőlapján.","student":"Ideiglenesen szerepkört váltott ezen a kurzuson, a kurzust jelenleg hallgatóként tekinti meg. Visszaállíthatja a szerepkörét és jogosultságait a kurzus kezdőlapján.","ta":"Ideiglenesen szerepkört váltott ezen a kurzuson, a kurzust jelenleg segédoktatóként tekinti meg. Visszaállíthatja a szerepkörét és jogosultságait a kurzus kezdőlapján.","teacher":"Ideiglenesen szerepkört váltott ezen a kurzuson, a kurzust jelenleg oktatóként tekinti meg. Visszaállíthatja a szerepkörét és jogosultságait a kurzus kezdőlapján."},"titles":{"equella_content_preview":"Equella tartalom előnézete","external_link":"Linkek egy külső oldalra","preview_document":"Dokumentum előnézete"}},"time":{"count_hours_ago":{"one":"1 órával ezelőtt","other":"%{count} órával ezelőtt"},"count_minutes_ago":{"one":"1 perccel ezelőtt","other":"%{count} perccel ezelőtt"},"less_than_a_minute_ago":"kevesebb mint egy perce"}},"hy":{"instructure_js":{"alerts":{"file_previews_disabled":"Ֆայլերի նախնական դիտումները Canvas-ի այս կայքի համար անջատվել են"},"buttons":{"next_module":"Հաջորդ մոդուլը","previous_module":"Նախորդ մոդուլը"},"draft":"Սևագիր","errors":{"posting_message_failed":"Տեղադրումը չհաջողվեց, փորձեք կրկին:"},"links":{"minimize_file_preview":"Փոքրացնել ֆայլի նախնական դիտումը","minimize_youtube_video":"Փոքրացնել տեսահոլովակը","view_equella_content_in_new_window":"Բովանդակության դիտում նոր պատուհանում"},"status":{"posting_message":"Հաղորդագրությունը տեղադրվում է..."},"switched_roles_message":{"designer":"Դուք այս դասընթացի համար ժամանակավորապես միացրել եք դերերը և այժմ դիտում եք դասընթացը որպես դիզայներ: Դասընթացի հիմնական էջից դուք կարող եք վերականգնել ձեր դերը և թույլտվությունները: ","observer":"Դուք այս դասընթացի համար ժամանակավորապես միացրել եք դերերը և այժմ դիտում եք դասընթացը որպես դիտորդ: Դասընթացի հիմնական էջից դուք կարող եք վերականգնել ձեր դերը և թույլտվությունները:","student":"Դուք այս դասընթացի համար ժամանակավորապես միացրել եք դերերը և այժմ դիտում եք դասընթացը որպես ունկնդիր: Դասընթացի հիմնական էջից դուք կարող եք վերականգնել ձեր դերը և թույլտվությունները:","ta":"Դուք այս դասընթացի համար ժամանակավորապես միացրել եք դերերը և այժմ դիտում եք դասընթացը որպես ասիստենտ: Դասընթացի հիմնական էջից դուք կարող եք վերականգնել ձեր դերը և թույլտվությունները:","teacher":"Դուք այս դասընթացի համար ժամանակավորապես միացրել եք դերերը և այժմ դիտում եք դասընթացը որպես դասավանդող: Դասընթացի հիմնական էջից դուք կարող եք վերականգնել ձեր դերը և թույլտվությունները:"},"titles":{"equella_content_preview":"Equella-ի բովանդակության նախնական դիտում","external_link":"Արտաքին կայքին հղումներ","preview_document":"Փաստաթղթի նախնական դիտում"}},"time":{"count_hours_ago":{"one":"1 ժամ առաջ","other":"%{count} ժամ առաջ"},"count_minutes_ago":{"one":"1 րոպե առաջ","other":"%{count} րոպե առաջ"},"less_than_a_minute_ago":"ավելի քիչ, քան մեկ րոպե առաջ"}},"is":{"download_3e89bdef":"Hlaða niður","instructure_js":{"alerts":{"file_previews_disabled":"Forskoðun skráa er ekki virk fyrir þessa Canvas-síðu"},"buttons":{"next_module":"Næsta eining","previous_module":"Fyrri eining"},"draft":"Drög","errors":{"posting_message_failed":"Birting tókst ekki, reyndu aftur"},"links":{"minimize_file_preview":"Lágmarka forskoðun skrár","minimize_youtube_video":"Minnka myndband","view_equella_content_in_new_window":"skoða efnið í nýjum glugga"},"status":{"posting_message":"Birti skilaboð..."},"switched_roles_message":{"designer":"Þú hefur skipt tímabundið um hlutverk á þessu námskeiði og sérð nú námskeiðið sem hönnuður.  Þú getur endurheimt hlutverk þitt og heimildir á heimasíðu námskeiðsins.","observer":"Þú hefur skipt tímabundið um hlutverk á þessu námskeiði og sérð nú námskeiðið sem skoðandi.  Þú getur endurheimt hlutverk þitt og heimildir á heimasíðu námskeiðsins.","student":"Þú hefur skipt tímabundið um hlutverk á þessu námskeiði og sérð nú námskeiðið sem nemandi.  Þú getur endurheimt hlutverk þitt og heimildir á heimasíðu námskeiðsins.","ta":"Þú hefur skipt tímabundið um hlutverk á þessu námskeiði og sérð nú námskeiðið sem aðstpðarkennari.  Þú getur endurheimt hlutverk þitt og heimildir á heimasíðu námskeiðsins.","teacher":"Þú hefur skipt tímabundið um hlutverk á þessu námskeiði og sérð nú námskeiðið sem kennari.  Þú getur endurheimt hlutverk þitt og heimildir á heimasíðu námskeiðsins."},"titles":{"equella_content_preview":"Equella forskoðun efnis","external_link":"Tenglar á ytra svæði.","preview_document":"Forskoða skjal"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Eitthvað fór úrskeiðis við að hlaða forskoðun skrárinnar.","this_image_is_currently_unavailable_25c68857":"Þessi mynd er ótiltæk eins og er","time":{"count_hours_ago":{"one":"Fyrir 1 klukkustund","other":"Fyrir %{count} klukkustundum"},"count_minutes_ago":{"one":"Fyrir 1 mínútu","other":"Fyrir %{count} mínútum"},"less_than_a_minute_ago":"fyrir tæpri mínútu"}},"it":{"download_3e89bdef":"download","instructure_js":{"alerts":{"file_previews_disabled":"Le anteprima dei file sono state disattivate per questo sito Canvas"},"buttons":{"next_module":"Modulo successivo","previous_module":"Modulo precedente"},"draft":"Bozza","errors":{"posting_message_failed":"Pubblicazione non riuscita. Riprova"},"links":{"minimize_file_preview":"Riduci a icona anteprima file","minimize_youtube_video":"Riduci a icona video","view_equella_content_in_new_window":"visualizza il contenuto in una nuova finestra"},"status":{"posting_message":"Pubblicazione del messaggio in corso..."},"switched_roles_message":{"designer":"Hai temporaneamente modificato i ruoli per questo corso e ora stai visualizzando il corso come progettista.  Puoi ripristinare il tuo ruolo e le tue autorizzazioni dalla home page del corso.","observer":"Hai temporaneamente modificato i ruoli per questo corso e ora stai visualizzando il corso come osservatore.  Puoi ripristinare il tuo ruolo e le tue autorizzazioni dalla home page del corso.","student":"Hai temporaneamente modificato i ruoli per questo corso e ora stai visualizzando il corso come studente.  Puoi ripristinare il tuo ruolo e le tue autorizzazioni dalla home page del corso.","ta":"Hai temporaneamente modificato i ruoli per questo corso e ora stai visualizzando il corso come assistente.  Puoi ripristinare il tuo ruolo e le tue autorizzazioni dalla home page del corso.","teacher":"Hai temporaneamente modificato i ruoli per questo corso e ora stai visualizzando il corso come insegnante.  Puoi ripristinare il tuo ruolo e le tue autorizzazioni dalla home page del corso."},"titles":{"equella_content_preview":"Anteprima contenuto EQUELLA","external_link":"Collega a un sito esterno.","preview_document":"Visualizza in anteprima il documento"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Si è verificato qualcosa di sbagliato durante il caricamento del file previewer.","this_image_is_currently_unavailable_25c68857":"Questa immagine non è attualmente disponibile","time":{"count_hours_ago":{"one":"1 ora fa","other":"%{count} ore fa"},"count_minutes_ago":{"one":"1 minuto fa","other":"%{count} minuti fa"},"less_than_a_minute_ago":"meno di un minuto fa"}},"ja":{"download_3e89bdef":"ダウンロード","instructure_js":{"alerts":{"file_previews_disabled":"この Canvas サイトは、ファイル プレビューが無効になっています"},"buttons":{"next_module":"次のモジュール","previous_module":"前のモジュール"},"draft":"下書き：","errors":{"posting_message_failed":"投稿に失敗しました。もう一度、試してください"},"links":{"minimize_file_preview":"ファイル プレビューを最小化","minimize_youtube_video":"ビデオを最小化","view_equella_content_in_new_window":"コンテンツを新しいウィンドウで表示"},"status":{"posting_message":"メッセージを投稿しています..."},"switched_roles_message":{"designer":"このコースでの役割が一時的に切り替わりました。現在、設計者としてコースを表示しています。コースのホーム ページで、役割と権限を復元することができます。","observer":"このコースでの役割が一時的に切り替わりました。現在、オブザーバとしてコースを表示しています。コースのホーム ページで、役割と権限を復元することができます。","student":"このコースでの役割が一時的に切り替わりました。現在、受講者としてコースを表示しています。コースのホーム ページで、役割と権限を復元することができます。","ta":"このコースでの役割が一時的に切り替わりました。現在、TA としてコースを表示しています。コースのホーム ページで、役割と権限を復元することができます。","teacher":"このコースでの役割が一時的に切り替わりました。現在、講師としてコースを表示しています。コースのホーム ページで、役割と権限を復元することができます。"},"titles":{"equella_content_preview":"Equella コンテンツ プレビュー","external_link":"外部サイトにリンクしています。","preview_document":"この文書をプレビュー"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"ファイルプレビューアを読み込み中に問題が発生しました。","this_image_is_currently_unavailable_25c68857":"この画像は現在利用できません","time":{"count_hours_ago":{"one":"%{count} 時間前","other":"%{count} 時間前"},"count_minutes_ago":{"one":"%{count} 分前","other":"%{count} 分前"},"less_than_a_minute_ago":"1 分前未満"}},"ko":{"instructure_js":{"alerts":{"file_previews_disabled":"이 Canvas 사이트에는 파일 미리 보기 사용 안 함"},"buttons":{"next_module":"다음 모듈","previous_module":"이전 모듈"},"draft":"초안","errors":{"posting_message_failed":"게시 실패. 다시 시도하시기 바랍니다."},"links":{"minimize_file_preview":"파일 미리 보기 최소화","minimize_youtube_video":"비디오 최소화","view_equella_content_in_new_window":"새 창에서 내용 보기"},"status":{"posting_message":"메시지 게시 중..."},"switched_roles_message":{"designer":"이 과목에 대해 임시로 역할을 전환하여 지금 디자이너로서 과목을 보고 있습니다. 과목 홈 페이지에서 역할과 권한을 복원할 수 있습니다.","observer":"이 과목에 대해 임시로 역할을 전환하여 지금 감독자로서 과목을 보고 있습니다. 과목 홈 페이지에서 역할과 권한을 복원할 수 있습니다.","student":"이 과목에 대해 임시로 역할을 전환하여 지금 학생으로서 과목을 보고 있습니다. 과목 홈 페이지에서 역할과 권한을 복원할 수 있습니다.","ta":"이 과목에 대해 임시로 역할을 전환하여 지금 조교로서 과목을 보고 있습니다. 과목 홈 페이지에서 역할과 권한을 복원할 수 있습니다.","teacher":"이 과목에 대해 임시로 역할을 전환하여 지금 교사로서 과목을 보고 있습니다. 과목 홈 페이지에서 역할과 권한을 복원할 수 있습니다."},"titles":{"equella_content_preview":"Equella 내용 미리 보기","external_link":"외부 사이트로 연결합니다.","preview_document":"문서 미리 보기"}},"time":{"count_hours_ago":{"one":"%{count}시간 전","other":"%{count}시간 전"},"count_minutes_ago":{"one":"%{count}분 전","other":"%{count}분 전"},"less_than_a_minute_ago":"1분 전 이내"}},"mi":{"download_3e89bdef":"tikiake","instructure_js":{"alerts":{"file_previews_disabled":"Kua monokia arokite Kōnae mō tēnei pae Canvas"},"buttons":{"next_module":"Kōwae Panuku","previous_module":"Kōwae mua"},"draft":"tauira","errors":{"posting_message_failed":"Whakairi rahua, Whakamātauria ano"},"links":{"minimize_file_preview":"Whakamōkito Arokitenga Kōnae","minimize_youtube_video":"Whakamōkito Ataata","view_equella_content_in_new_window":"tiro te ihirangi i roto i te matapihi hou"},"status":{"posting_message":"Te tuku Karere ..."},"switched_roles_message":{"designer":"Kua whakawhiti e koe tūranga poto mo tēnei akoranga, a kei te mātakitaki i tēnei i te akoranga me te he kaitātai.  Ka taea e koe te whakahoki tō tūranga me whakāetanga i te whare whārangi akoranga.","observer":"Kua whakawhiti e koe tūranga poto mo tēnei akoranga, a kei te mātakitaki i tēnei i te akoranga hei kaimātakitaki.  Ka taea e koe te whakahoki tō tūranga me whakāetanga i te whare whārangi akoranga.","student":"Kua whakawhiti e koe tūranga poto mo tēnei akoranga, a kei te mātakitaki i tēnei i te akoranga me te he ākonga.  Ka taea e koe te whakahoki tō tūranga me whakāetanga i te whare whārangi akoranga.","ta":"Kua whakawhiti e koe tūranga poto mo tēnei akoranga, a kei te mātakitaki i tēnei i te akoranga me te he TA.  Ka taea e koe te whakahoki tō tūranga me whakāetanga i te whare whārangi akoranga.","teacher":"Kua whakawhiti e koe tūranga poto mo tēnei akoranga, a kei te mātakitaki i tēnei i te akoranga ano he kaiako.  Ka taea e koe te whakahoki tō tūranga me whakāetanga i te whare whārangi akoranga."},"titles":{"equella_content_preview":"Arokite Ihirangi Equella","external_link":"Hononga ki te pae o waho.","preview_document":"Arokite i te tuhinga"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"He hapa i te wā e uta ana ngā kōnae arokite.","this_image_is_currently_unavailable_25c68857":"Kaore tēnei āhua i te wātea i tēnei wā","time":{"count_hours_ago":{"one":"1 haora i mua","other":"%{count} haora i mua"},"count_minutes_ago":{"one":"1 meneti i mua","other":"%{count} meneti i mua"},"less_than_a_minute_ago":"iti iho i te i te meneti i mua"}},"nb":{"download_3e89bdef":"last ned","instructure_js":{"alerts":{"file_previews_disabled":"Forhåndsvisning av filer er slått av for denne Canvas-installasjonen"},"buttons":{"next_module":"Neste modul","previous_module":"Forrige modul"},"draft":"Utkast","errors":{"posting_message_failed":"Posting mislyktes, prøv igjen"},"links":{"minimize_file_preview":"Minimer forhåndsvisning av fil","minimize_youtube_video":"Minimer video","view_equella_content_in_new_window":"Vis innholdet i et nytt vindu"},"status":{"posting_message":"Poster melding…"},"switched_roles_message":{"designer":"Du har midlertidig endret rolle i dette emnet, og ser nå emnet som en designer.  Du kan tilbakestille rollen din og tillatelsene fra startside for emner.","observer":"Du har midlertidig endret rolle i dette emnet, og ser nå emnet som en observatør.  Du kan tilbakestille rollen din og tillatelsene fra startside for emner.","student":"Du har midlertidig endret rolle i dette emnet, og ser nå emnet som en student.  Du kan tilbakestille rollen din og tillatelsene fra startside for emner.","ta":"Du har midlertidig endret rolle i dette emnet, og ser nå emnet som en LA.  Du kan tilbakestille rollen din og tillatelsene fra startside for emner.","teacher":"Du har midlertidig endret rolle i dette emnet, og ser nå emnet som en faglærer.  Du kan tilbakestille rollen din og tillatelsene fra startside for emner."},"titles":{"equella_content_preview":"Forhåndsvisning av innhold fra Equella","external_link":"Lenker til en ekstern side.","preview_document":"Forhåndsvis dokumentet"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Noe gikk galt ved lasting av forhåndsvisning av fil.","this_image_is_currently_unavailable_25c68857":"Dette bildet er utilgjengelig for øyeblikket","time":{"count_hours_ago":{"one":"1 time siden","other":"%{count} timer siden"},"count_minutes_ago":{"one":"1 minutt siden","other":"%{count} minutter siden"},"less_than_a_minute_ago":"under et minutt siden"}},"nb-x-k12":{"download_3e89bdef":"last ned","instructure_js":{"alerts":{"file_previews_disabled":"Forhåndsvisning av filer er slått av for denne Canvas-installasjonen"},"buttons":{"next_module":"Neste modul","previous_module":"Forrige modul"},"draft":"Utkast","errors":{"posting_message_failed":"Posting mislyktes, prøv igjen"},"links":{"minimize_file_preview":"Minimer forhåndsvisning av fil","minimize_youtube_video":"Minimer video","view_equella_content_in_new_window":"Vis innholdet i et nytt vindu"},"status":{"posting_message":"Poster melding…"},"switched_roles_message":{"designer":"Du har midlertidig endret rolle i dette faget, og ser nå faget som en designer.  Du kan tilbakestille rollen din og tillatelsene fra startside for fag.","observer":"Du har midlertidig endret rolle i dette faget, og ser nå faget som en observatør.  Du kan tilbakestille rollen din og tillatelsene fra startside for fag.","student":"Du har midlertidig endret rolle i dette faget, og ser nå faget som en elev.  Du kan tilbakestille rollen din og tillatelsene fra startside for fag.","ta":"Du har midlertidig endret rolle i dette faget, og ser nå faget som en LA.  Du kan tilbakestille rollen din og tillatelsene fra startside for fag.","teacher":"Du har midlertidig endret rolle i dette faget, og ser nå faget som en faglærer.  Du kan tilbakestille rollen din og tillatelsene fra startside for fag."},"titles":{"equella_content_preview":"Forhåndsvisning av innhold fra Equella","external_link":"Lenker til en ekstern side.","preview_document":"Forhåndsvis dokumentet"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Noe gikk galt ved lasting av forhåndsvisning av fil.","this_image_is_currently_unavailable_25c68857":"Dette bildet er utilgjengelig for øyeblikket","time":{"count_hours_ago":{"one":"1 time siden","other":"%{count} timer siden"},"count_minutes_ago":{"one":"1 minutt siden","other":"%{count} minutter siden"},"less_than_a_minute_ago":"under et minutt siden"}},"nl":{"download_3e89bdef":"downloaden","instructure_js":{"alerts":{"file_previews_disabled":"Voorbeelden van bestanden zijn niet ingeschakeld voor deze Canvas-site"},"buttons":{"next_module":"Volgende module","previous_module":"Vorige module"},"draft":"Concept","errors":{"posting_message_failed":"Posten mislukt, probeer het opnieuw"},"links":{"minimize_file_preview":"Voorbeeld van bestand minimaliseren","minimize_youtube_video":"Video minimaliseren","view_equella_content_in_new_window":"de inhoud in een nieuw venster weergeven"},"status":{"posting_message":"Bezig met bericht posten..."},"switched_roles_message":{"designer":"Je bent in deze cursus tijdelijk van functie gewisseld, en je bekijkt deze cursus nu als ontwerper.  Je kunt jouw eigen functie en machtigingen herstellen via de startpagina van de cursus.","observer":"Je bent in deze cursus tijdelijk van functie gewisseld, en je bekijkt deze cursus nu als waarnemer.  Je kunt jouw eigen functie en machtigingen herstellen via de startpagina van de cursus.","student":"Je bent in deze cursus tijdelijk van functie gewisseld, en je bekijkt deze cursus nu als cursist.  Je kunt jouw eigen functie en machtigingen herstellen via de startpagina van de cursus.","ta":"Je bent in deze cursus tijdelijk van functie gewisseld en je bekijkt deze cursus nu als onderwijsassistent.  Je kunt jouw eigen functie en machtigingen herstellen via de startpagina van de cursus.","teacher":"Je bent in deze cursus tijdelijk van functie gewisseld en je bekijkt deze cursus nu als docent.  Je kunt jouw eigen functie en machtigingen herstellen via de startpagina van de cursus."},"titles":{"equella_content_preview":"Voorbeeld van Equella inhoud","external_link":"Koppelingen naar een externe site.","preview_document":"Voorbeeld van document"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Er is iets fout gegaan bij het laden van de voorbeeldweergave van het bestand.","this_image_is_currently_unavailable_25c68857":"Deze afbeelding is momenteel niet beschikbaar","time":{"count_hours_ago":{"one":"1 uur geleden","other":"%{count} uur geleden"},"count_minutes_ago":{"one":"1 minuut geleden","other":"%{count} minuten geleden"},"less_than_a_minute_ago":"minder dan 1 minuut geleden"}},"nn":{"instructure_js":{"alerts":{"file_previews_disabled":"Førehandsvising av filer er deaktivert for dette Canvas-området"},"buttons":{"next_module":"Neste modul","previous_module":"Førre modul"},"draft":"Utkast","errors":{"posting_message_failed":"Oppføring mislukkast, prøv på nytt seinare"},"links":{"minimize_file_preview":"Minimer førehandsvising av fil","minimize_youtube_video":"Minimer video","view_equella_content_in_new_window":"sjå innhaldet i eit nytt vindauge"},"status":{"posting_message":"Sender melding..."},"switched_roles_message":{"designer":"Du har mellombels skifta rolle for dette emnet, og ser no emnet som ein designar.  Du kan tilbakestille rolla og løyvet frå emnet si startside.","observer":"Du har mellombels skifta rolle for dette emnet, og ser no emnet som ein observatør.  Du kan tilbakestille rolla og løyvet frå emnet si startside.","student":"Du har mellombels skifta rolle for dette emnet, og ser no emnet som ein student.  Du kan tilbakestille rolla og løyvet frå emnet si startside.","ta":"Du har mellombels skifta rolle for dette emnet, og ser no emnet som ein undervisingsassistent.  Du kan tilbakestille rolla og løyvet frå emnet si startside.","teacher":"Du har mellombels skifta rolle for dette emnet, og ser no emnet som ein faglærar.  Du kan tilbakestille rolla og løyvet frå emnet si startside."},"titles":{"equella_content_preview":"Førehandsvising av innhald frå EQUELLA","external_link":"Lenker til eit ekstern område.","preview_document":"Førehandsvising av dokumentet"}},"time":{"count_hours_ago":{"one":"1 time sidan","other":"%{count} timar sidan"},"count_minutes_ago":{"one":"1 minutt sidan","other":"%{count} minutt sidan"},"less_than_a_minute_ago":"mindre enn eit minutt sidan"}},"pl":{"download_3e89bdef":"pobieranie","instructure_js":{"alerts":{"file_previews_disabled":"Podgląd plików jest nieaktywny dla tej witryny Canvas"},"buttons":{"next_module":"Następny moduł","previous_module":"Poprzedni moduł"},"draft":"Wersja robocza","errors":{"posting_message_failed":"Publikacja nie powiodła się, spróbuj ponownie"},"links":{"minimize_file_preview":"Minimalizuj podgląd pliku","minimize_youtube_video":"Minimalizuj okno wideo","view_equella_content_in_new_window":"pokaż zawartość w nowym oknie"},"status":{"posting_message":"Trwa wysyłanie wiadomości..."},"switched_roles_message":{"designer":"Użytkownik tymczasowo zmienił rolę w kursie i teraz widzi go z poziomu autora.  Na stronie głównej można przywrócić wcześniejszą rolę i uprawnienia.","observer":"Użytkownik tymczasowo zmienił rolę w kursie i teraz widzi go z poziomu słuchacza.  Na stronie głównej można przywrócić wcześniejszą rolę i uprawnienia.","student":"Użytkownik tymczasowo zmienił rolę w kursie i teraz widzi go z poziomu uczestnika.  Na stronie głównej można przywrócić wcześniejszą rolę i uprawnienia.","ta":"Użytkownik tymczasowo zmienił rolę w kursie i teraz widzi go z poziomu pomocnika instruktora.  Na stronie głównej można przywrócić wcześniejszą rolę i uprawnienia.","teacher":"Użytkownik tymczasowo zmienił rolę w kursie i teraz widzi go z poziomu instruktora.  Na stronie głównej można przywrócić wcześniejszą rolę i uprawnienia."},"titles":{"equella_content_preview":"Podgląd zawartości systemu Equella","external_link":"Łącza do strony zewnętrznej.","preview_document":"Wyświetl podgląd dokumentu"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Wystąpił błąd podczas wczytywania narzędzia do podglądu plików.","this_image_is_currently_unavailable_25c68857":"Obecnie ten obraz jest niedostępny","time":{"count_hours_ago":{"one":"1 godzina temu","other":"%{count} godzin temu"},"count_minutes_ago":{"one":"1 minuta temu","other":"%{count} minut temu"},"less_than_a_minute_ago":"mniej niż minutę temu"}},"pt":{"download_3e89bdef":"descarregar","instructure_js":{"alerts":{"file_previews_disabled":"As visualizações de arquivo foram desativadas para este site Canvas"},"buttons":{"next_module":"Próximo módulo","previous_module":"Módulo anterior"},"draft":"Rascunho","errors":{"posting_message_failed":"Falha na publicação, tente novamente"},"links":{"minimize_file_preview":"Minimizar visualização de arquivo","minimize_youtube_video":"Minimizar vídeo","view_equella_content_in_new_window":"exibir o conteúdo em uma nova janela"},"status":{"posting_message":"Publicando mensagem..."},"switched_roles_message":{"designer":"Mudou de função temporariamente para esta disciplina e está a ver a disciplina como designer.  Pode restaurar a sua função e as suas permissões na página inicial da disciplina.","observer":"Mudou de função temporariamente para esta disciplina e está a ver a disciplina como observador.  Pode restaurar a sua função e as suas permissões na página inicial da disciplina.","student":"Mudou de função temporariamente para esta disciplina e está a ver a disciplina como aluno.  Pode restaurar a sua função e as suas permissões na página inicial da disciplina.","ta":"Mudou de função temporariamente para esta disciplina e está a ver a disciplina como assistente.  Pode restaurar a sua função e as suas permissões na página inicial da disciplina.","teacher":"Mudou de função temporariamente para esta disciplina e está a ver a disciplina como professor.  Pode restaurar a sua função e as suas permissões na página inicial da disciplina."},"titles":{"equella_content_preview":"Visualização do conteúdo do Equella","external_link":"Links para um site externo","preview_document":"Visualizar o documento"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Algo correu mal ao carregar a visualização do ficheiro.","this_image_is_currently_unavailable_25c68857":"Esta imagem está actualmente indisponível","time":{"count_hours_ago":{"one":"1 hora atrás","other":"%{count} horas atrás"},"count_minutes_ago":{"one":"1 minuto atrás","other":"%{count} minutos atrás"},"less_than_a_minute_ago":"há menos de um minuto"}},"pt-BR":{"download_3e89bdef":"baixar","instructure_js":{"alerts":{"file_previews_disabled":"As pré-visualizações de arquivo foram desativadas para este site Canvas"},"buttons":{"next_module":"Próximo módulo","previous_module":"Módulo anterior"},"draft":"Rascunho","errors":{"posting_message_failed":"Falha na postagem, tente novamente"},"links":{"minimize_file_preview":"Minimizar pré-visualização de arquivo","minimize_youtube_video":"Minimizar vídeo","view_equella_content_in_new_window":"exibir o conteúdo em uma nova janela"},"status":{"posting_message":"Postando mensagem..."},"switched_roles_message":{"designer":"Você alternou de papel temporariamente para este curso e agora está visualizando o curso como um designer.  É possível restaurar seu papel e permissões na página inicial do curso.","observer":"Você alternou de papel temporariamente neste curso e agora está visualizando o curso como observador.  É possível restaurar seu papel e permissões na página inicial do curso.","student":"Você alternou de papel temporariamente neste curso e agora está visualizando o curso como aluno.  É possível restaurar seu papel e permissões na página inicial do curso.","ta":"Você alternou de papel temporariamente neste curso e agora está visualizando o curso como assistente.  É possível restaurar seu papel e permissões na página inicial do curso.","teacher":"Você alternou de papel temporariamente neste curso e agora está visualizando o curso como professor.  É possível restaurar seu papel e permissões na página inicial do curso."},"titles":{"equella_content_preview":"Pré-visualização do conteúdo do Equella","external_link":"Links para um site externo.","preview_document":"Pré-visualizar o documento"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Ocorreu um erro ao carregar o visualizador de arquivo.","this_image_is_currently_unavailable_25c68857":"Esta imagem está atualmente indisponível","time":{"count_hours_ago":{"one":"1 hora atrás","other":"%{count} horas atrás"},"count_minutes_ago":{"one":"1 minuto atrás","other":"%{count} minutos atrás"},"less_than_a_minute_ago":"há menos de um minuto"}},"ru":{"download_3e89bdef":"скачать","instructure_js":{"alerts":{"file_previews_disabled":"Предварительный просмотр файла отключен для этого сайта Canvas"},"buttons":{"next_module":"Следующий модуль","previous_module":"предыдущий модуль"},"draft":"Черновик","errors":{"posting_message_failed":"Сбой записи, повторите попытку"},"links":{"minimize_file_preview":"Уменьшить просмотр файла","minimize_youtube_video":"Уменьшить видео","view_equella_content_in_new_window":"просмотр содержания в новом окне"},"status":{"posting_message":"Публикация сообщения..."},"switched_roles_message":{"designer":"Вы временно переключили роли для этого курса и сейчас просматриваете курс как дизайнер.  Можно восстановить роль и разрешения на домашней странице курса.","observer":"Вы временно переключили роли для этого курса и сейчас просматриваете курс как наблюдатель.  Можно восстановить роль и разрешения на домашней странице курса.","student":"Вы временно переключили роли для этого курса и сейчас просматриваете курс как студент.  Можно восстановить роль и разрешения на домашней странице курса.","ta":"Вы временно переключили роли для этого курса и сейчас просматриваете курс как ассистент.  Можно восстановить роль и разрешения на домашней странице курса.","teacher":"Вы временно переключили роли для этого курса и сейчас просматриваете курс как учитель.  Можно восстановить роль и разрешения на домашней странице курса."},"titles":{"equella_content_preview":"Предварительный просмотр содержания Equella","external_link":"Ссылки на внешний сайт.","preview_document":"Предварительный просмотр документа"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"При загрузке средства предпросмотра файлов что-то пошло не так.","this_image_is_currently_unavailable_25c68857":"Это изображение в настоящее время недоступно","time":{"count_hours_ago":{"one":"1 час назад","other":"%{count} часа(ов) назад"},"count_minutes_ago":{"one":"1 минута назад","other":"%{count} минут(ы) назад"},"less_than_a_minute_ago":"меньше минуты назад"}},"sl":{"time":{"count_hours_ago":{"one":"1 uro prej","other":"%{count} ur prej"},"count_minutes_ago":{"one":"1 minuto prej","other":"%{count} minut prej"},"less_than_a_minute_ago":"manj kot minuto prej"}},"sv":{"download_3e89bdef":"ladda ner","instructure_js":{"alerts":{"file_previews_disabled":"Förhandsvisning av filer har avaktiverats för den här Canvas sidan"},"buttons":{"next_module":"Nästa modul","previous_module":"Föregående modul"},"draft":"Utkast","errors":{"posting_message_failed":"Inlägg misslyckades, Försök igen"},"links":{"minimize_file_preview":"Minimera förhandsvisning av fil","minimize_youtube_video":"Minimera video","view_equella_content_in_new_window":"visa innehållet i ett nytt fönster"},"status":{"posting_message":"Lägger upp meddelande ..."},"switched_roles_message":{"designer":"Du har tillfälligt fått byta roll i den här kursen, du ser den just nu som en designer.  Du kan få tillbaka din roll och dina behörigheter från kursens startsida.","observer":"Du har tillfälligt fått byta roll i den här kursen, du ser den just nu som en observatör.  Du kan få tillbaka din roll och dina behörigheter från kursens startsida.","student":"Du har tillfälligt fått byta roll i den här kursen, du ser den just nu som en student.  Du kan få tillbaka din roll och dina behörigheter från kursens startsida.","ta":"Du har tillfälligt fått byta roll i den här kursen, du ser den just nu som en lärarassistent.  Du kan få tillbaka din roll och dina behörigheter från kursens startsida.","teacher":"Du har tillfälligt fått byta roll i den här kursen, du ser den just nu som en lärare.  Du kan få tillbaka din roll och dina behörigheter från kursens startsida."},"titles":{"equella_content_preview":"Equella förhandsvisning av innehåll","external_link":"Länkar till en externa sida.","preview_document":"Förhandsgranska dokumentet"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Något gick fel under inläsning av filförhandsgranskaren.","this_image_is_currently_unavailable_25c68857":"Den här bilden är för närvarande inte tillgänglig","time":{"count_hours_ago":{"one":"1 timme sedan","other":"%{count} timmar sedan"},"count_minutes_ago":{"one":"1 minut sedan","other":"%{count} minuter sedan"},"less_than_a_minute_ago":"för mindre än en minut sedan"}},"sv-x-k12":{"download_3e89bdef":"ladda ner","instructure_js":{"alerts":{"file_previews_disabled":"Förhandsvisning av filer har avaktiverats för den här Canvas sidan"},"buttons":{"next_module":"Nästa modul","previous_module":"Föregående modul"},"draft":"Utkast","errors":{"posting_message_failed":"Inlägg misslyckades, Försök igen"},"links":{"minimize_file_preview":"Minimera förhandsvisning av fil","minimize_youtube_video":"Minimera video","view_equella_content_in_new_window":"visa innehållet i ett nytt fönster"},"status":{"posting_message":"Lägger upp meddelande ..."},"switched_roles_message":{"designer":"Du har tillfälligt fått byta roll i den här kursen, du ser den just nu som en designer.  Du kan få tillbaka din roll och dina behörigheter från kursens startsida.","observer":"Du har tillfälligt fått byta roll i den här kursen, du ser den just nu som en observatör.  Du kan få tillbaka din roll och dina behörigheter från kursens startsida.","student":"Du har tillfälligt fått byta roll i den här kursen, du ser den just nu som en elev.  Du kan få tillbaka din roll och dina behörigheter från kursens startsida.","ta":"Du har tillfälligt fått byta roll i den här kursen, du ser den just nu som en lärarassistent.  Du kan få tillbaka din roll och dina behörigheter från kursens startsida.","teacher":"Du har tillfälligt fått byta roll i den här kursen, du ser den just nu som en lärare.  Du kan få tillbaka din roll och dina behörigheter från kursens startsida."},"titles":{"equella_content_preview":"Equella förhandsvisning av innehåll","external_link":"Länkar till en externa sida.","preview_document":"Förhandsgranska dokumentet"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"Något gick fel under inläsning av filförhandsgranskaren.","this_image_is_currently_unavailable_25c68857":"Den här bilden är för närvarande inte tillgänglig","time":{"count_hours_ago":{"one":"1 timme sedan","other":"%{count} timmar sedan"},"count_minutes_ago":{"one":"1 minut sedan","other":"%{count} minuter sedan"},"less_than_a_minute_ago":"för mindre än en minut sedan"}},"tr":{"instructure_js":{"alerts":{"file_previews_disabled":"Bu Canvas sitesinde dosya ön izlemeleri devre dışı"},"buttons":{"next_module":"Sonraki Modül","previous_module":"Önceki Modül"},"draft":"Taslak","errors":{"posting_message_failed":"Gönderim Başarısız, Lütfen Tekrar Deneyin"},"links":{"minimize_file_preview":"Dosya Ön İzlemesini Küçült","minimize_youtube_video":"Video\'yu Küçült","view_equella_content_in_new_window":"içeriği yeni pencerede görüntüle"},"status":{"posting_message":"Mesajınız Gönderiliyor..."},"switched_roles_message":{"designer":"Bu ders için geçici olarak rolünüz değişti ve dersi şu anda tasarımcı olarak görüyorsunuz. İzin ve rollerinizi dersin ana sayfasından eski haline getirebilirsiniz.","observer":"Bu ders için geçici olarak rolünüz değişti ve dersi şu anda gözlemci olarak görüyorsunuz. İzin ve rollerinizi dersin ana sayfasından eski haline getirebilirsiniz.","student":"Bu ders için geçici olarak rolünüz değişti ve dersi şu anda öğrenci olarak görüyorsunuz. İzin ve rollerinizi dersin ana sayfasından eski haline getirebilirsiniz.","ta":"Bu ders için geçici olarak rolünüz değişti ve dersi şu anda asistan öğretmen olarak görüyorsunuz. İzin ve rollerinizi dersin ana sayfasından eski haline getirebilirsiniz.","teacher":"Bu ders için geçici olarak rolünüz değişti ve dersi şu anda öğretmen olarak görüyorsunuz. İzin ve rollerinizi dersin ana sayfasından eski haline getirebilirsiniz."},"titles":{"equella_content_preview":"Equella İçerik Ön İzlemesi","external_link":"Harici bir siteye bağlantılar.","preview_document":"Bu Dosyayı Önizle"}},"time":{"count_hours_ago":{"one":"1 saat önce","other":"%{count} saat önce"},"count_minutes_ago":{"one":"1 dakika önce","other":"%{count} dakika önce"},"less_than_a_minute_ago":"bir dakikadan daha az"}},"uk":{"time":{"count_hours_ago":{"one":"1 година тому","other":"%{count} годин тому"},"count_minutes_ago":{"one":"1 хвилина тому","other":"%{count} хвилин тому"},"less_than_a_minute_ago":"Менше, ніж хвилину тому"}},"zh-Hans":{"download_3e89bdef":"下载","instructure_js":{"alerts":{"file_previews_disabled":"此 Canvas 网站已禁用文件预览"},"buttons":{"next_module":"下一个单元","previous_module":"上一个单元"},"draft":"草稿","errors":{"posting_message_failed":"发布失败，请重试"},"links":{"minimize_file_preview":"最小化文件预览","minimize_youtube_video":"最小化视频","view_equella_content_in_new_window":"在新窗口中查看内容"},"status":{"posting_message":"正在发布消息..."},"switched_roles_message":{"designer":"您已临时切换此课程的身份，现在以设计者的身份查看课程。您可以从课程主页恢复您的身份和权限。","observer":"您已临时切换此课程的身份，现在以观察员的身份查看课程。您可以从课程主页恢复您的身份和权限。","student":"您已临时切换此课程的身份，现在以学生的身份查看课程。您可以从课程主页恢复您的身份和权限。","ta":"您已临时切换此课程的身份，现在以助教的身份查看课程。您可以从课程主页恢复您的身份和权限。","teacher":"您已临时切换此课程的身份，现在以教师的身份查看课程。您可以从课程主页恢复您的身份和权限。"},"titles":{"equella_content_preview":"Equella 内容预览","external_link":"链接到外部网站。","preview_document":"预览文档"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"加载文件预览器时遇到问题。","this_image_is_currently_unavailable_25c68857":"该图像目前不可用","time":{"count_hours_ago":{"one":"%{count} 小时前","other":"%{count} 小时前"},"count_minutes_ago":{"one":"%{count} 分钟前","other":"%{count} 分钟前"},"less_than_a_minute_ago":"不到一分钟前"}},"zh-Hant":{"download_3e89bdef":"下載","instructure_js":{"alerts":{"file_previews_disabled":"已為此 Canvas 網站停用文檔預覽"},"buttons":{"next_module":"下一個單元","previous_module":"上一個單元"},"draft":"草稿","errors":{"posting_message_failed":"發佈失敗，請再試一次"},"links":{"minimize_file_preview":"最小化文檔預覽","minimize_youtube_video":"最小化視訊","view_equella_content_in_new_window":"在新視窗中檢視內容"},"status":{"posting_message":"正在公佈訊息…"},"switched_roles_message":{"designer":"您已針對這門課程暫時切換了角色，現在正在以設計師身份檢視課程。您可以從課程首頁還原您的角色和權限。","observer":"您已針對這門課程暫時切換了角色，現在正在以觀察者身份檢視課程。您可以從課程首頁還原您的角色和權限。","student":"您已針對這門課程暫時切換了角色，現在正在以學生身份檢視課程。您可以從課程首頁還原您的角色和權限。","ta":"您已針對這門課程暫時切換了角色，現在正在以助教身份檢視課程。您可以從課程首頁還原您的角色和權限。","teacher":"您已針對這門課程暫時切換了角色，現在正在以教師身份檢視課程。您可以從課程首頁還原您的角色和權限。"},"titles":{"equella_content_preview":"Equella 內容預覽","external_link":"連結到外部網站。","preview_document":"預覽文件"}},"someting_went_wrong_loading_the_file_previewer_3315815c":"載入檔案預覽器時發生錯誤。","this_image_is_currently_unavailable_25c68857":"此圖像目前不可用","time":{"count_hours_ago":{"one":"%{count}小時以前","other":"%{count} 小時以前"},"count_minutes_ago":{"one":"%{count}分鐘以前","other":"%{count} 分鐘以前"},"less_than_a_minute_ago":"不到一分鐘以前"}}}' ) )
      i( "jQeR" )
      i( "0sPK" )
      var s = n[ "default" ].scoped( "instructure_js" )
      var r = i( "ouhR" )
      var l = i.n( r )
      var u = i( "GLiE" )
      var d = i.n( u )
      var _ = i( "2DhO" )
      var m = i( "5Ky4" )
      var c = i( "Nxtp" )
      var g = i( "21i1" )
      i( "u7Gu" )
      i( "YGE8" )

      function h( e ) {
        e = ( e || "" ).split( ":" )[ 0 ]
        const t = e.split( "." ),
          i = t.length
        return ( i > 1 ? [ t[ i - 2 ], t[ i - 1 ] ] : t ).join( "" )
      }
      const p = h( window.location.hostname )
      l.a.expr[ ":" ].external = function ( e ) {
        const t = l()( e ).attr( "href" )
        return !!( t && t.length && !t.match( /^(mailto\:|javascript\:)/ ) && e.hostname && h( e.hostname ) != p )
      }
      window.equella = {
        ready( e ) {
          l()( document ).triggerHandler( "equella_ready", e )
        },
        cancel() {
          l()( document ).triggerHandler( "equella_cancel" )
        }
      }
      l()( document ).bind( "equella_ready", ( function ( e, t ) {
        l()( "#equella_dialog" ).triggerHandler( "equella_ready", t )
      } ) ).bind( "equella_cancel", ( function () {
        l()( "#equella_dialog" ).dialog( "close" )
      } ) )
      window.external_tool_dialog = {
        ready( e ) {
          const t = jQuery.Event( "selection" )
          t.contentItems = e
          l()( "#resource_selection_dialog:visible" ).triggerHandler( t )
          l()( "#homework_selection_dialog:visible" ).triggerHandler( t )
        },
        cancel() {
          l()( "#external_tool_button_dialog" ).dialog( "close" )
          l()( "#resource_selection_dialog" ).dialog( "close" )
          l()( "#homework_selection_dialog:visible" ).dialog( "close" )
        }
      }
      window.jsonFlickrApi = function ( e ) {
        l()( "#instructure_image_search" ).triggerHandler( "search_results", e )
      }
      i( "VHne" )
      i( "jYyc" )
      i( "fy7k" )
      var v = i( "hiU6" )
      i( "UlQx" )
      i( "Z+Ib" )
      i( "JI1W" )
      i( "p6Wi" )
      i( "q3b3" )
      i( "7LJr" )
      i( "MWZS" )
      i( "OShF" )
      i( "TBRb" )
      i( "7WS/" )
      i( "2sOc" )
      i( "teYS" )
      i( "Yf8v" )
      i( "fuo4" )
      i( "Sv6n" )
      l()( "body" ).on( "click", "[data-track-category]", ( function () {
        const e = l()( this ).data(),
          t = e.trackCategory,
          i = e.trackLabel,
          a = e.trackAction,
          n = e.trackValue
        Object( v[ "a" ] )( t, a, i, n )
      } ) )
      let f = 0

      function w() {
        return "preview_" + ++f
      }

      function b() {
        const e = l()( this )
        const t = e.attr( "href" )
        const i = l.a.youTubeID( t || "" )
        if ( i && !e.hasClass( "inline_disabled" ) ) {
          const a = l()( `\n      <a\n        href="${Object(m["a"])(t)}"\n        class="youtubed"\n      >\n        <img src="/images/play_overlay.png"\n          class="media_comment_thumbnail"\n          style="background-image: url(//img.youtube.com/vi/${Object(m["a"])(i)}/2.jpg)"\n          alt="${Object(m["a"])(e.data("preview-alt")||"")}"\n        />\n      </a>\n    ` )
          a.click( Object( c[ "a" ] )( ( function () {
            const e = l()( `\n        <span class='youtube_holder' style='display: block;'>\n          <iframe\n            src='//www.youtube.com/embed/${Object(m["a"])(i)}?autoplay=1&rel=0&hl=en_US&fs=1'\n            frameborder='0'\n            width='425'\n            height='344'\n            allowfullscreen\n          ></iframe>\n          <br/>\n          <a\n            href='#'\n            style='font-size: 0.8em;'\n            class='hide_youtube_embed_link'\n          >\n            ${Object(m["a"])(s.t("links.minimize_youtube_video","Minimize Video"))}\n          </a>\n        </span>\n      ` )
            e.find( ".hide_youtube_embed_link" ).click( Object( c[ "a" ] )( () => {
              e.remove()
              a.show()
              Object( v[ "a" ] )( "hide_embedded_content", "hide_you_tube" )
            } ) )
            l()( this ).after( e ).hide()
          } ) ) )
          Object( v[ "a" ] )( "show_embedded_content", "show_you_tube" )
          e.addClass( "youtubed" ).after( a )
        }
      }
      Object( v[ "a" ] )( "Route", window.location.pathname.replace( /\/$/, "" ).replace( /\d+/g, "--" ) || "/" )
      const k = ".dialog, .draggable, .resizable, .sortable, .tabs"

      function y() {
        if ( ENV.SKIP_ENHANCING_USER_CONTENT ) return
        const e = l()( "#content" )
        l()( ".user_content:not(.enhanced):visible" ).addClass( "unenhanced" )
        l()( ".user_content.unenhanced:visible" ).each( ( function () {
          const t = l()( this )
          t.find( "img" ).each( ( i, a ) => {
            const n = () => {
              const i = Math.min( e.width(), t.width(), l()( a ).width() || a.naturalWidth )
              i > 0 && l()( a ).css( "maxWidth", Math.min( e.width(), t.width(), l()( a ).width() || a.naturalWidth ) )
            }
            0 === a.naturalWidth ? a.addEventListener( "load", n ) : n();
            /hidden=1$/.test( a.getAttribute( "src" ) ) && a.setAttribute( "alt", s.t( "This image is currently unavailable" ) )
          } )
          t.data( "unenhanced_content_html", t.html() )
        } ) ).find( ".enhanceable_content" ).show().filter( k ).ifExists( e => {
          const t = "Deprecated use of magic jQueryUI widget markup detected:\n\nYou're relying on undocumented functionality where Canvas makes jQueryUI widgets out of rich content that has the following class names: " + k + ".\n\nCanvas is moving away from jQueryUI for our own widgets and this behavior will go away. Rather than relying on the internals of Canvas's JavaScript, you should use your own custom JS file to do any such customizations."
          console.error( t, e )
        } ).end().filter( ".dialog" ).each( ( function () {
          const e = l()( this )
          e.hide()
          e.closest( ".user_content" ).find( "a[href='#" + e.attr( "id" ) + "']" ).click( t => {
            t.preventDefault()
            e.dialog()
          } )
        } ) ).end().filter( ".draggable" ).draggable().end().filter( ".resizable" ).resizable().end().filter( ".sortable" ).sortable().end().filter( ".tabs" ).each( ( function () {
          l()( this ).tabs()
        } ) ).end().end().find( "a:not(.not_external, .external):external" ).each( ( function () {
          const e = Object( m[ "a" ] )( s.t( "titles.external_link", "Links to an external site." ) )
          l()( this ).not( ":has(img)" ).addClass( "external" ).html( "<span>" + l()( this ).html() + "</span>" ).attr( "target", "_blank" ).attr( "rel", "noreferrer noopener" ).append( '<span aria-hidden="true" class="ui-icon ui-icon-extlink ui-icon-inline" title="' + l.a.raw( e ) + '"/>' ).append( '<span class="screenreader-only">&nbsp;(' + l.a.raw( e ) + ")</span>" )
        } ) ).end()
        l()( "a.instructure_file_link, a.instructure_scribd_file" ).each( ( function () {
          const e = l()( this )
          l()( ".user_content.unenhanced:visible" )
          const t = e.data( "api-returntype" )
          const i = null == t || "File" === t
          if ( e.find( ".ui-icon-extlink" ).length || !i ) return
          let a, n, o
          if ( l.a.trim( e.text() ) ) {
            var r
            const t = l()( "<span class='instructure_file_holder link_holder'/>" )
            const i = w()
            o = l()( '<div role="region" />' ).attr( "id", i ).css( "display", "none" )
            if ( null !== ( r = ENV.FEATURES ) && void 0 !== r && r.rce_better_file_downloading ) {
              const t = new URL( e[ 0 ].href )
              const i = t.searchParams
              i.delete( "wrap" )
              i.append( "download_frd", "1" )
              const n = `${t.origin}${t.pathname.replace(/(?:\/(download|preview))?$/,"/download")}?${i}`
              a = l()( `<a class="file_download_btn" role="button" download style="margin-inline-start: 5px;" href="${Object(m["a"])(n)}">\n              <img style="width:16px; height:16px" src="/images/svg-icons/svg_icon_download.svg" alt="" role="presentation"/>\n              <span class="screenreader-only">\n                ${Object(m["a"])(s.t("download"))}\n              </span>\n            </a>` )
            }
            if ( l.a.filePreviewsEnabled() && e.hasClass( "instructure_scribd_file" ) ) {
              var u
              if ( null !== ( u = ENV.FEATURES ) && void 0 !== u && u.rce_better_file_previewing )
                if ( e.hasClass( "inline_disabled" ) ) e.addClass( "preview_in_overlay" )
              else {
                e.addClass( "file_preview_link" )
                e.attr( "aria-expanded", "false" )
                e.attr( "aria-controls", i )
              } else e.hasClass( "inline_disabled" ) || ( n = l()( "<a class='file_preview_link' aria-hidden='true' href='" + Object( m[ "a" ] )( e.attr( "href" ) ) + "' title='" + Object( m[ "a" ] )( s.t( "titles.preview_document", "Preview the document" ) ) + "' style='margin-inline-start: 5px;'><img src='/images/preview.png' alt='" + Object( m[ "a" ] )( s.t( "titles.preview_document", "Preview the document" ) ) + "'/></a>" ) )
            }
            e.removeClass( "instructure_file_link" )
            e.removeClass( "instructure_scribd_file" ).before( t ).appendTo( t )
            t.append( n )
            t.append( a )
            t.append( o )
            if ( e.hasClass( "auto_open" ) ) {
              var d
              n ? n.click() : null !== ( d = ENV.FEATURES ) && void 0 !== d && d.rce_better_file_previewing && e.click()
            }
          }
        } ) )
        l()( ".user_content.unenhanced a,.user_content.unenhanced+div.answers a" ).find( "img.media_comment_thumbnail" ).each( ( function () {
          l()( this ).closest( "a" ).addClass( "instructure_inline_media_comment" )
        } ) ).end().filter( ".instructure_inline_media_comment" ).removeClass( "no-underline" ).mediaCommentThumbnail( "normal" ).end().filter( ".instructure_video_link, .instructure_audio_link" ).mediaCommentThumbnail( "normal", true ).end().not( ".youtubed" ).each( b )
        l()( ".user_content.unenhanced" ).removeClass( "unenhanced" ).addClass( "enhanced" )
        setTimeout( () => {
          l()( ".user_content form.user_content_post_form:not(.submitted)" ).submit().addClass( "submitted" )
        }, 10 )
        document.querySelectorAll( '.user_content iframe[sandbox="allow-scripts allow-forms allow-same-origin"]' ).forEach( e => {
          e.removeAttribute( "sandbox" )
          const t = e.src
          e.src = t
        } )
      }

      function z( e ) {
        const t = l.a.fudgeDateForProfileTimezone( e )
        return t.toString( "MMM d, yyyy h:mmtt" )
      }

      function j( e ) {
        "string" === typeof e && ( e = Date.parse( e ) )
        const t = new Date - e
        if ( t < 864e5 ) {
          if ( t < 36e5 ) {
            if ( t < 6e4 ) return s.t( "#time.less_than_a_minute_ago", "less than a minute ago" ) {
              const e = parseInt( t / 6e4, 10 )
              return s.t( "#time.count_minutes_ago", {
                one: "1 minute ago",
                other: "%{count} minutes ago"
              }, {
                count: e
              } )
            }
          } {
            const e = parseInt( t / 36e5, 10 )
            return s.t( "#time.count_hours_ago", {
              one: "1 hour ago",
              other: "%{count} hours ago"
            }, {
              count: e
            } )
          }
        }
        return z( e )
      }
      l()( ( function () {
        var e
        if ( window._earlyClick ) {
          document.removeEventListener( "click", window._earlyClick )
          window._earlyClick.clicks && setTimeout( ( function () {
            l.a.each( d.a.uniq( window._earlyClick.clicks ), ( function () {
              const e = l.a.Event( "click" )
              e.preventDefault()
              l()( this ).trigger( e )
            } ) )
          } ), 1 )
        }
        const t = l()( "#breadcrumbs" )
        if ( t.length ) {
          let e
          let i = false
          const a = 40.5
          let n
          const o = () => {
            n && ( window.cancelIdleCallback || window.cancelAnimationFrame )( n )
            n = ( window.requestIdleCallback || window.requestAnimationFrame )( () => {
              let n = 500
              e = e || t.find( ".ellipsible" )
              e.ifExists( () => {
                e.css( "maxWidth", "" )
                for ( let o = 0; t.height() > a && o < 20; o++ ) {
                  if ( !i ) {
                    i = true
                    e.addClass( "ellipsis" )
                  }
                  e.css( "maxWidth", n -= 20 )
                }
              } )
            } )
          }
          o()
          l()( window ).resize( o )
        }
        a[ "a" ].prototype.bindOpenKeys.call( {
          $el: l()( "#keyboard_navigation" )
        } )
        l()( "#switched_role_type" ).ifExists( ( function () {
          const e = l()( this ).attr( "class" )
          const t = l()( "<img/>" )
          let i = null
          switch ( l()( this ).data( "role" ) ) {
            case "TeacherEnrollment":
              i = s.t( "switched_roles_message.teacher", "You have switched roles temporarily for this course, and are now viewing the course as a teacher.  You can restore your role and permissions from the course home page." )
              break
            case "StudentEnrollment":
              i = s.t( "switched_roles_message.student", "You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page." )
              break
            case "TaEnrollment":
              i = s.t( "switched_roles_message.ta", "You have switched roles temporarily for this course, and are now viewing the course as a TA.  You can restore your role and permissions from the course home page." )
              break
            case "ObserverEnrollment":
              i = s.t( "switched_roles_message.observer", "You have switched roles temporarily for this course, and are now viewing the course as an observer.  You can restore your role and permissions from the course home page." )
              break
            case "DesignerEnrollment":
              i = s.t( "switched_roles_message.designer", "You have switched roles temporarily for this course, and are now viewing the course as a designer.  You can restore your role and permissions from the course home page." )
              break
            default:
              i = s.t( "switched_roles_message.student", "You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page." )
          }
          t.attr( "src", "/images/warning.png" ).attr( "title", i ).css( {
            paddingRight: 2,
            width: 12,
            height: 12
          } )
          l()( "#crumb_" + e ).find( "a" ).prepend( t )
        } ) )
        l()( "a.show_quoted_text_link" ).live( "click", ( function ( e ) {
          const t = l()( this ).parents( ".quoted_text_holder" ).children( ".quoted_text" )
          if ( t.length > 0 ) {
            e.preventDefault()
            t.show()
            l()( this ).hide()
          }
        } ) )
        l()( "a.equella_content_link" ).live( "click", ( function ( e ) {
          e.preventDefault()
          let t = l()( "#equella_preview_dialog" )
          if ( !t.length ) {
            t = l()( "<div/>" )
            t.attr( "id", "equella_preview_dialog" ).hide()
            t.html( "<h2/><iframe style='background: url(/images/ajax-loader-medium-444.gif) no-repeat left top; width: 800px; height: 350px; border: 0;' src='about:blank' borderstyle='0'/><div style='text-align: right;'><a href='#' class='original_link external external_link' target='_blank'>" + Object( m[ "a" ] )( s.t( "links.view_equella_content_in_new_window", "view the content in a new window" ) ) + "</a>" )
            t.find( "h2" ).text( l()( this ).attr( "title" ) || l()( this ).text() || s.t( "titles.equella_content_preview", "Equella Content Preview" ) )
            const e = t.find( "iframe" )
            setTimeout( () => {
              e.css( "background", "#fff" )
            }, 2500 )
            l()( "body" ).append( t )
            t.dialog( {
              autoOpen: false,
              width: "auto",
              resizable: false,
              title: s.t( "titles.equella_content_preview", "Equella Content Preview" ),
              close() {
                t.find( "iframe" ).attr( "src", "about:blank" )
              }
            } )
          }
          t.find( ".original_link" ).attr( "href", l()( this ).attr( "href" ) )
          t.dialog( "close" ).dialog( "open" )
          t.find( "iframe" ).attr( "src", l()( this ).attr( "href" ) )
        } ) )
        l()( ".dialog_opener[aria-controls]:not(.user_content *)" ).live( "click", ( function ( e ) {
          const t = this
          l()( "#" + l()( this ).attr( "aria-controls" ) ).ifExists( i => {
            e.preventDefault()
            if ( !i.data( "dialog" ) ) {
              i.dialog( l.a.extend( {
                autoOpen: false,
                modal: true
              }, l()( t ).data( "dialogOpts" ) ) )
              i.fixDialogButtons()
            }
            i.dialog( "open" )
          } )
        } ) )
        l.a.filePreviewsEnabled() ? l()( "a.file_preview_link" ).live( "click", ( function ( e ) {
          var t
          if ( e.ctrlKey || e.altKey || e.metaKey || e.shiftKey ) return
          e.preventDefault()
          const i = l()( this )
          if ( "true" === i.attr( "aria-expanded" ) ) {
            i.parent().find( ".hide_file_preview_link" ).click()
            return
          }
          i.loadingImage( {
            image_size: "small",
            horizontal: "right!"
          } )
          null !== ( t = ENV.FEATURES ) && void 0 !== t && t.rce_better_file_previewing ? i.attr( "aria-expanded", "true" ) : i.hide()
          l.a.ajaxJSON( i.attr( "href" ).replace( /\/(download|preview)/, "" ).replace( /wrap=1&?/, "" ).replace( /[?&]$/, "" ), "GET", {}, t => {
            const a = t && t.attachment
            i.loadingImage( "remove" )
            if ( a && ( l.a.isPreviewable( a.content_type, "google" ) || a.canvadoc_session_url ) ) {
              var n
              const t = null !== ( n = window.ENV ) && void 0 !== n && n.FEATURES.rce_better_file_previewing ? l()( `[id="${i.attr("aria-controls")}"]` ) : i.parent().find( '[role="region"][id^="preview_"]' )
              t.css( "display", "block" ).loadDocPreview( {
                canvadoc_session_url: a.canvadoc_session_url,
                mimeType: a.content_type,
                public_url: a.public_url,
                attachment_preview_processing: "pending_upload" === a.workflow_state || "processing" === a.workflow_state
              } )
              const o = l()( '<a href="#" style="font-size: 0.8em;" class="hide_file_preview_link">' + Object( m[ "a" ] )( s.t( "links.minimize_file_preview", "Minimize File Preview" ) ) + "</a>" ).click( e => {
                e.preventDefault()
                i.attr( "aria-expanded", "false" )
                i.show()
                i.focus()
                t.html( "" ).css( "display", "none" )
                Object( v[ "a" ] )( "hide_embedded_content", "hide_file_preview" )
              } )
              t.prepend( o )
              Object.prototype.hasOwnProperty.call( e, "originalEvent" ) && o.focus()
              Object( v[ "a" ] )( "show_embedded_content", "show_file_preview" )
            }
          }, () => {
            i.loadingImage( "remove" ).hide()
          } )
        } ) ) : l()( "a.file_preview_link" ).live( "click", e => {
          e.preventDefault()
          alert( s.t( "alerts.file_previews_disabled", "File previews have been disabled for this Canvas site" ) )
        } )
        null !== ( e = ENV.FEATURES ) && void 0 !== e && e.rce_better_file_previewing && l()( "a.preview_in_overlay" ).live( "click", e => {
          const t = e.target.href.match( /\/files\/(\d+)/ )
          if ( t ) {
            if ( e.ctrlKey || e.altKey || e.metaKey || e.shiftKey ) return
            e.preventDefault()
            const a = t[ 1 ]
            Promise.all( [ i.e( 1 ), i.e( 8 ), i.e( 23 ), i.e( 60 ), i.e( 164 ), i.e( 638 ) ] ).then( i.bind( null, "1yb/" ) ).then( e => {
              e.showFilePreview( a )
            } ).catch( e => {
              l.a.flashError( s.t( "Someting went wrong loading the file previewer." ) )
            } )
          }
        } )
        let n
        l.a.subscribe( "userContent/change", () => {
          clearTimeout( n )
          n = setTimeout( y, 50 )
        } )
        l()( document ).bind( "user_content_change", y )
        l()( () => {
          setInterval( y, 15e3 )
          setTimeout( y, 15 )
        } )
        l()( ".zone_cached_datetime" ).each( ( function () {
          if ( l()( this ).attr( "title" ) ) {
            const e = _[ "a" ].parse( l()( this ).attr( "title" ) )
            e && l()( this ).text( l.a.datetimeString( e ) )
          }
        } ) )
        l()( ".show_sub_messages_link" ).click( ( function ( e ) {
          e.preventDefault()
          l()( this ).parents( ".subcontent" ).find( ".communication_sub_message.toggled_communication_sub_message" ).removeClass( "toggled_communication_sub_message" )
          l()( this ).parents( ".communication_sub_message" ).remove()
        } ) )
        l()( ".show_comments_link" ).click( ( function ( e ) {
          e.preventDefault()
          l()( this ).closest( "ul" ).find( "li" ).show()
          l()( this ).closest( "li" ).remove()
        } ) )
        l()( ".communication_message .message_short .read_more_link" ).click( ( function ( e ) {
          e.preventDefault()
          l()( this ).parents( ".communication_message" ).find( ".message_short" ).hide().end().find( ".message" ).show()
        } ) )
        l()( ".communication_message .close_notification_link" ).live( "click", ( function ( e ) {
          e.preventDefault()
          const t = l()( this ).parents( ".communication_message" )
          t.confirmDelete( {
            url: l()( this ).attr( "rel" ),
            noMessage: true,
            success() {
              l()( this ).slideUp( ( function () {
                l()( this ).remove()
              } ) )
            }
          } )
        } ) )
        l()( ".communication_message .add_entry_link" ).click( ( function ( e ) {
          e.preventDefault()
          const t = l()( this ).parents( ".communication_message" )
          const i = t.find( ".reply_message" ).hide()
          const a = t.find( ".communication_sub_message.blank" ).clone( true ).removeClass( "blank" )
          i.before( a.show() )
          const n = d.a.uniqueId( "textarea_" )
          a.find( "textarea.rich_text" ).attr( "id", n )
          l()( document ).triggerHandler( "richTextStart", l()( "#" + n ) )
          a.find( "textarea:first" ).focus().select()
        } ) )
        l()( document ).bind( "richTextStart", ( e, t ) => {
          if ( !t || 0 === t.length ) return
          t = l()( t )
          if ( !t || 0 === t.length ) return
          g[ "a" ].initSidebar( {
            show() {
              l()( "#sidebar_content" ).hide()
            },
            hide() {
              l()( "#sidebar_content" ).show()
            }
          } )
          g[ "a" ].loadNewEditor( t, {
            focus: true
          } )
        } ).bind( "richTextEnd", ( e, t ) => {
          if ( !t || 0 === t.length ) return
          t = l()( t )
          if ( !t || 0 === t.length ) return
          g[ "a" ].destroyRCE( t )
        } )
        l()( ".communication_message .content .links .show_users_link,.communication_message .header .show_users_link" ).click( ( function ( e ) {
          e.preventDefault()
          l()( this ).parents( ".communication_message" ).find( ".content .users_list" ).slideToggle()
        } ) )
        l()( ".communication_message .delete_message_link" ).click( ( function ( e ) {
          e.preventDefault()
          l()( this ).parents( ".communication_message" ).confirmDelete( {
            noMessage: true,
            url: l()( this ).attr( "href" ),
            success() {
              l()( this ).slideUp()
            }
          } )
        } ) )
        l()( ".communication_sub_message .add_conversation_message_form" ).formSubmit( {
          beforeSubmit( e ) {
            l()( this ).find( "button" ).attr( "disabled", true )
            l()( this ).find( ".submit_button" ).text( s.t( "status.posting_message", "Posting Message..." ) )
            l()( this ).loadingImage()
          },
          success( e ) {
            l()( this ).loadingImage( "remove" )
            const t = l()( this ).parents( ".communication_sub_message" )
            const i = t.parents( ".communication_message" )
            const a = e.messages[ 0 ]
            t.fillTemplateData( {
              data: {
                post_date: l.a.datetimeString( a.created_at ),
                message: a.body
              },
              htmlValues: [ "message" ]
            } )
            t.find( ".message" ).show()
            l()( this ).remove()
            i.find( ".reply_message" ).show()
            l.a.flashMessage( "Message Sent!" )
            l()( document ).triggerHandler( "user_content_change" )
            "/" === window.location.pathname && Object( v[ "a" ] )( "dashboard_comment", "create" )
          },
          error( e ) {
            l()( this ).loadingImage( "remove" )
            l()( this ).find( "button" ).attr( "disabled", false )
            l()( this ).find( ".submit_button" ).text( "Post Failed, Try Again" )
            l()( this ).formErrors( e )
          }
        } )
        l()( ".communication_sub_message .add_sub_message_form" ).formSubmit( {
          beforeSubmit( e ) {
            l()( this ).find( "button" ).attr( "disabled", true )
            l()( this ).find( ".submit_button" ).text( s.t( "status.posting_message", "Posting Message..." ) )
            l()( this ).loadingImage()
          },
          success( e ) {
            l()( this ).loadingImage( "remove" )
            const t = l()( this ).parents( ".communication_sub_message" )
            if ( l()( this ).hasClass( "submission_comment_form" ) ) {
              const i = l()( this ).getTemplateData( {
                textValues: [ "submission_user_id" ]
              } ).submission_user_id
              let a = null
              for ( const t in e ) {
                const n = e[ t ].submission
                n.user_id == i && ( a = n )
              }
              if ( a ) {
                const e = a.submission_comments[ a.submission_comments.length - 1 ].submission_comment
                e.post_date = l.a.datetimeString( e.created_at )
                e.message = e.formatted_body || e.comment
                t.fillTemplateData( {
                  data: e,
                  htmlValues: [ "message" ]
                } )
              }
            } else {
              const i = e.discussion_entry
              i.post_date = l.a.datetimeString( i.created_at )
              t.find( ".content > .message_html" ).val( i.message )
              t.fillTemplateData( {
                data: i,
                htmlValues: [ "message" ]
              } )
            }
            t.find( ".message" ).show()
            t.find( ".user_content" ).removeClass( "enhanced" )
            t.parents( ".communication_message" ).find( ".reply_message" ).removeClass( "lonely_behavior_message" ).show()
            l()( document ).triggerHandler( "richTextEnd", l()( this ).find( "textarea.rich_text" ) )
            l()( document ).triggerHandler( "user_content_change" )
            l()( this ).remove()
            window.location.href.match( /dashboard/ ) && Object( v[ "a" ] )( "dashboard_comment", "create" )
          },
          error( e ) {
            l()( this ).loadingImage( "remove" )
            l()( this ).find( "button" ).attr( "disabled", false )
            l()( this ).find( ".submit_button" ).text( s.t( "errors.posting_message_failed", "Post Failed, Try Again" ) )
            l()( this ).formErrors( e )
          }
        } )
        l()( ".communication_sub_message form .cancel_button" ).click( ( function () {
          const e = l()( this ).parents( ".communication_sub_message" )
          const t = l()( this ).parents( ".communication_message" )
          l()( document ).triggerHandler( "richTextEnd", e.find( "textarea.rich_text" ) )
          e.remove()
          t.find( ".reply_message" ).show()
        } ) )
        l()( ".communication_message,.communication_sub_message" ).bind( "focusin mouseenter", ( function () {
          l()( this ).addClass( "communication_message_hover" )
        } ) ).bind( "focusout mouseleave", ( function () {
          l()( this ).removeClass( "communication_message_hover" )
        } ) )
        l()( ".communication_sub_message .more_options_reply_link" ).click( ( function ( e ) {
          e.preventDefault()
          const t = l()( this ).parents( "form" )
          let i = null
          i = t.hasClass( "submission_comment_form" ) ? {
            comment: t.find( "textarea:visible:first" ).val() || ""
          } : {
            message: t.find( "textarea:visible:first" ).val() || ""
          }
          window.location.href = l()( this ).attr( "href" ) + "?message=" + encodeURIComponent( i.message )
        } ) )
        l()( ".communication_message.new_activity_message" ).ifExists( ( function () {
          this.find( ".message_type img" ).click( ( function () {
            const e = l()( this ),
              t = l.a.trim( e.attr( "class" ) )
            e.parents( ".message_type" ).find( "img" ).removeClass( "selected" )
            e.addClass( "selected" ).parents( ".new_activity_message" ).find( ".message_type_text" ).text( e.attr( "title" ) ).end().find( ".activity_form" ).hide().end().find( "textarea, :text" ).val( "" ).end().find( "." + t + "_form" ).show().find( ".context_select" ).change()
          } ) )
          this.find( ".context_select" ).change( ( function () {
            const e = l()( this ),
              t = e.val(),
              i = e.parents( ".communication_message" ),
              a = i.find( "form" )
            a.attr( "action", i.find( "." + t + "_form_url" ).attr( "href" ) )
            a.data( "context_name", this.options[ this.selectedIndex ].text )
            a.data( "context_code", t )
            i.find( ".roster_list" ).hide().find( ":checkbox" ).each( ( function () {
              l()( this ).attr( "checked", false )
            } ) )
            i.find( "." + t + "_roster_list" ).show()
          } ) ).triggerHandler( "change" )
          this.find( ".cancel_button" ).click( ( function ( e ) {
            l()( this ).parents( ".communication_message" ).hide().prev( ".new_activity_message" ).show()
          } ) )
          this.find( ".new_activity_message_link" ).click( ( function ( e ) {
            e.preventDefault()
            l()( this ).parents( ".communication_message" ).hide().next( ".new_activity_message" ).find( ".message_type img.selected" ).click().end().show().find( ":text:visible:first" ).focus().select()
          } ) )
          this.find( "form.message_form" ).formSubmit( {
            beforeSubmit( e ) {
              l()( "button" ).attr( "disabled", true )
              l()( "button.submit_button" ).text( s.t( "status.posting_message", "Posting Message..." ) )
            },
            success( e ) {
              l()( "button" ).attr( "disabled", false )
              l()( "button.submit_button" ).text( "Post Message" )
              const t = l()( this ).data( "context_code" ) || ""
              const i = l()( this ).data( "context_name" ) || ""
              if ( l()( this ).hasClass( "discussion_topic_form" ) ) {
                const a = e.discussion_topic
                a.context_code = i
                a.user_name = l()( "#identity .user_name" ).text()
                a.post_date = l.a.datetimeString( a.created_at )
                a.topic_id = a.id
                const n = l()( this ).parents( ".communication_message" ).find( ".template" )
                const o = n.find( ".communication_message" ).clone( true )
                o.find( ".header .title,.behavior_content .less_important a" ).attr( "href", n.find( "." + t + "_topic_url" ).attr( "href" ) )
                o.find( ".add_entry_link" ).attr( "href", n.find( "." + t + "_topics_url" ).attr( "href" ) )
                o.find( ".user_name" ).attr( "href", n.find( "." + t + "_user_url" ).attr( "href" ) )
                o.find( ".topic_assignment_link,.topic_assignment_url" ).attr( "href", n.find( "." + t + "_assignment_url" ).attr( "href" ) )
                o.find( ".attachment_name,.topic_attachment_url" ).attr( "href", n.find( "." + t + "_attachment_url" ).attr( "href" ) )
                const s = {
                  discussion_topic_id: a.id
                }
                o.fillTemplateData( {
                  data: a,
                  hrefValues: [ "topic_id", "user_id", "assignment_id", "attachment_id" ],
                  avoid: ".subcontent"
                } )
                o.find( ".subcontent" ).fillTemplateData( {
                  data: s,
                  hrefValues: [ "topic_id", "user_id" ]
                } )
                o.find( ".subcontent form" ).attr( "action", n.find( "." + t + "_entries_url" ).attr( "href" ) )
                o.fillFormData( s, {
                  object_name: "discussion_entry"
                } )
                l()( this ).parents( ".communication_message" ).after( o.hide() )
                o.slideDown()
                l()( this ).parents( ".communication_message" ).slideUp()
                l()( this ).parents( ".communication_message" ).prev( ".new_activity_message" ).slideDown()
              } else l()( this ).hasClass( "announcement_form" ) || window.location.reload()
            },
            error( e ) {
              l()( "button" ).attr( "disabled", false )
              l()( "button.submit_button" ).text( s.t( "errors.posting_message_failed", "Post Failed, Try Again" ) )
              l()( this ).formErrors( e )
            }
          } )
        } ) )
        l()( "#topic_list .show_all_messages_link" ).show().click( ( function ( e ) {
          e.preventDefault()
          l()( "#topic_list .topic_message" ).show()
          l()( this ).hide()
        } ) )
        let o = []

        function r() {
          o = [ ...document.querySelectorAll( ".time_ago_date" ) ].filter( l.a.expr.filters.visible )
          u()
        }

        function u() {
          const e = o.shift()
          if ( e ) {
            const t = l()( e ),
              i = t.data( "parsed_date" ) || Date.parse( t.data( "timestamp" ) || "" )
            if ( i ) {
              t.data( "timestamp", i.toISOString() )
              t.data( "parsed_date", i )
              t.text( j( i ) )
              t.attr( "title", z( i ) )
            }
            setTimeout( u, 1 )
          } else setTimeout( r, 6e4 )
        }
        setTimeout( r, 100 )
        const c = l()( "#sequence_footer .sequence_details_url" ).filter( ":last" ).attr( "href" )
        if ( c ) l.a.ajaxJSON( c, "GET", {}, e => {
          const t = l()( "#sequence_footer" )
          if ( e.current_item ) {
            l()( "#sequence_details .current" ).fillTemplateData( {
              data: e.current_item.content_tag
            } )
            l.a.each( {
              previous: ".prev",
              next: ".next"
            }, ( i, a ) => {
              const n = t.find( a )
              if ( e[ i + "_item" ] || e[ i + "_module" ] ) {
                const a = e[ i + "_item" ] && e[ i + "_item" ].content_tag || e[ i + "_module" ] && e[ i + "_module" ].context_module
                if ( !e[ i + "_item" ] ) {
                  a.title = a.title || a.name "unpublished" === a.workflow_state && ( a.title += " (" + s.t( "draft", "Draft" ) + ")" )
                  a.text = "previous" === i ? s.t( "buttons.previous_module", "Previous Module" ) : s.t( "buttons.next_module", "Next Module" )
                  n.addClass( "module_button" )
                }
                n.fillTemplateData( {
                  data: a
                } )
                e[ i + "_item" ] ? n.attr( "href", l.a.replaceTags( t.find( ".module_item_url" ).attr( "href" ), "id", a.id ) ) : n.attr( "href", l.a.replaceTags( t.find( ".module_url" ).attr( "href" ), "id", a.id ) + "/items/" + ( "previous" === i ? "last" : "first" ) )
              } else n.hide()
            } )
            t.show()
            l()( window ).resize()
          }
        } )
        else {
          const e = l()( "#sequence_footer" )
          if ( e.length ) {
            const t = l()( e[ 0 ] )
            Promise.all( [ i.e( 6 ), i.e( 59 ), i.e( 738 ) ] ).then( i.bind( null, "/j35" ) ).then( () => {
              t.moduleSequenceFooter( {
                courseID: t.attr( "data-course-id" ),
                assetType: t.attr( "data-asset-type" ),
                assetID: t.attr( "data-asset-id" )
              } )
            } )
          }
        }
        l()( "#right-side" ).delegate( ".more_link", "click", ( function ( e ) {
          const t = l()( this )
          const i = t.parents( "ul" ).children( ":hidden" ).show()
          t.closest( "li" ).remove()
          0 === e.screenX && i.first().find( ":tabbable:first" ).focus()
          return false
        } ) )
        l()( "#right-side" ).on( "click", ".disable-todo-item-link", ( function ( e ) {
          e.preventDefault()
          const t = l()( this ).parents( "li, div.topic_message" ).last()
          const i = l()( this ).closest( ".to-do-list > li" ).prev()
          const a = i.find( ".disable-todo-item-link" ).length && i.find( ".disable-todo-item-link" ) || l()( ".todo-list-header" )
          const n = l()( this ).data( "api-href" )
          const o = l()( this ).data( "flash-message" )

          function s( e ) {
            t.confirmDelete( {
              url: e,
              noMessage: true,
              success() {
                o && l.a.flashMessage( o )
                l()( this ).slideUp( ( function () {
                  l()( this ).remove()
                  a.focus()
                } ) )
              }
            } )
          }
          s( n )
        } ) )
        setTimeout( ( function () {
          const e = document.getElementById( "content" )
          if ( !e ) return
          const t = e.querySelectorAll( `a[href*="//"]:not([href*="${window.location.hostname}"])` )
          for ( let e = 0; e < t.length; e++ ) {
            const i = l()( t[ e ] )
            if ( i.hasClass( "external" ) ) continue
            const a = i.not( ".open_in_a_new_tab" ).not( ":has(img)" ).not( ".not_external" ).not( ".exclude_external_icon" )
            if ( a.length ) {
              const e = s.t( "titles.external_link", "Links to an external site." )
              const t = l()( '<span class="ui-icon ui-icon-extlink ui-icon-inline"/>' ).attr( "title", e )
              t.append( l()( '<span class="screenreader-only"/>' ).text( e ) )
              a.addClass( "external" ).children( "span.ui-icon-extlink" ).remove().end().html( "<span>" + i.html() + "</span>" ).attr( "target", "_blank" ).attr( "rel", "noreferrer noopener" ).append( t )
            }
          }
        } ), 100 )
      } ) )
    },
    fy7k: function ( e, t, i ) {
      "use strict"
      var a = i( "u7Gu" )
      var n = i( "pQTu" )
      var o = i( "m0r6" )
      Object( o[ "a" ] )( JSON.parse( '{"ar":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"لا يمكن عرض هذا المستند في Canvas.","document_preview_processing":"تجري معالجة معاينة المستند حاليًا. الرجاء إعادة المحاولة لاحقًا."}}},"ca":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Aquest document no es pot visualitzar al Canvas","document_preview_processing":"La visualització prèvia del document s\'està processant actualment. Torneu-ho a provar més tard."}}},"cy":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Does dim modd dangos y ddogfen hon yn Canvas.","document_preview_processing":"Mae’r rhagolwg o’r ddogfen wrthi’n cael ei brosesu ar hyn o bryd. Rhowch gynnig arall arni rywbryd eto."}}},"da":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Dette dokument kan ikke vises i Canvas.","document_preview_processing":"Dokumentets forhåndsvisning bliver behandlet i øjeblikket. Prøv igen senere."}}},"da-x-k12":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Dette dokument kan ikke vises i Canvas.","document_preview_processing":"Dokumentets forhåndsvisning bliver behandlet i øjeblikket. Prøv igen senere."}}},"de":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Dieses Dokument kann in Canvas nicht angezeigt werden.","document_preview_processing":"Die Dokumentvorschau wird gerade ausgeführt. Versuchen Sie es später noch einmal."}}},"el":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Αυτό το έγγραφο δεν μπορεί να εμφανιστεί μέσα στο Canvas.","document_preview_processing":"\\u003cmrk mid=\\"5994\\" mtype=\\"seg\\"\\u003eΗ προεπισκόπηση του εγγράφου δημιουργείται αυτή τη στιγμή.\\u003c/mrk\\u003e \\u003cmrk mid=\\"5995\\" mtype=\\"seg\\"\\u003eΠαρακαλώ δοκιμάστε ξανά αργότερα.\\u003c/mrk\\u003e"}}},"en-AU":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-AU-x-unimelb":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-CA":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-GB":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-GB-x-ukhe":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"es":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Este documento no se puede mostrar en Canvas.","document_preview_processing":"Todavía se está procesando la vista previa del documento. Inténtelo de nuevo más tarde."}}},"fa":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"این سند نمی تواند در کانواس نمایش داده شود.","document_preview_processing":"پیش نمایش سند در حال پردازش است. لطفا بعدا دوباره تلاش کنید."}}},"fi":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Tätä asiakirjaa ei voi näyttää Canvasissa.","document_preview_processing":"Asiakirjan esikatselua käsitellään parhaillaan. Yritä myöhemmin uudelleen."}}},"fr":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Ce document ne peut pas être affiché dans Canvas.","document_preview_processing":"Traitement en cours de l’aperçu du document. Veuillez réessayer plus tard."}}},"fr-CA":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Ce document ne peut pas être affiché dans Canvas.","document_preview_processing":"Traitement en cours de l’aperçu du document. Veuillez essayer de nouveau plus tard."}}},"he":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"מסמך זה לא ניתן להצגה בתוך קנבס.","document_preview_processing":"התצוגה המוקדמת של מסמך זה מעובדת כעת. יש לנסות מאוחר יותר"}}},"ht":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Dokiman sa a pa kapab afiche nan Canvas.","document_preview_processing":"Afichaj dokiman an pwosesis pou kounye a. Tanpri eseye ankò."}}},"hu":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Ezt a dokumentumot nem lehet megtekinteni a Canvasban. ","document_preview_processing":"A dokumentum előnézete feldolgozás alatt. Kérjük, próbálja újra később."}}},"hy":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Այս փաստաթուղթը չի կարող ցուցադրվել Canvas-ի ներսում:","document_preview_processing":"Փաստաթղթի նախնական դիտումը այժմ մշակման փուլում է: Փորձեք կրկին ավելի ուշ:"}}},"is":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Ekki hægt að sýna þetta skjal í Canvas.","document_preview_processing":"Forskoðun skjala er í vinnslu. Vinsamlegast reyndu aftur seinna."}}},"it":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Questo documento non può essere visualizzato in Canvas.","document_preview_processing":"L\'anteprima del documento è attualmente in elaborazione. Riprova in seguito."}}},"ja":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"この文書は Canvas 内で表示できません。","document_preview_processing":"文書のプレビューは現在処理中です。後ほどもういちど試してください。"}}},"ko":{"jquery_doc_previews":{"errors":{"document_preview_processing":"문서 미리 보기를 처리 중입니다. 나중에 다시 시도하시기 바랍니다."}}},"mi":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"E kore e taea te whakaatu i tēnei tuhinga i roto i Canvas.","document_preview_processing":"Kei te tukatuka i tēnei wā te arokite tuhinga. Tēnā koa ngana anō i muri mai."}}},"nb":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Dette dokumentet kan ikke vises i Canvas.","document_preview_processing":"Dokumentforhåndsvisningen behandles. Forsøk igjen senere."}}},"nb-x-k12":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Dette dokumentet kan ikke vises i Canvas.","document_preview_processing":"Dokumentforhåndsvisningen behandles. Forsøk igjen senere."}}},"nl":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Dit document kan niet in Canvas weergegeven worden.","document_preview_processing":"Het voorbeeld van het document wordt momenteel verwerkt. Probeer het later opnieuw."}}},"nn":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Dette dokumentet kan ikkje visast i Canvas.","document_preview_processing":"Førehandsvisinga av dokumentet blir behandla no. Prøv på nytt seinare."}}},"pl":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Nie można wyświetlić tego dokumentu w systemie Canvas.","document_preview_processing":"Podgląd dokumentu jest teraz przetwarzany. Spróbuj ponownie później."}}},"pt":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Não é possível visualizar este documento dentro do Canvas.","document_preview_processing":"A pré-visualização do documento está a ser processada. É favor, tentar novamente mais tarde."}}},"pt-BR":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Esse documento não pode ser exibido dentro do Canvas.","document_preview_processing":"No momento, a pré-visualização do documento está sendo processada. Por favor, tente novamente mais tarde."}}},"ru":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Этот документ нельзя отобразить внутри Canvas.","document_preview_processing":"Предварительный просмотр документа в данный момент обрабатывается. Попробуйте еще раз позже."}}},"sv":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Det här dokumentet kan inte visas i Canvas.","document_preview_processing":"Förhandsvisningen av dokumentet bearbetas. Försök igen senare."}}},"sv-x-k12":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Det här dokumentet kan inte visas i Canvas.","document_preview_processing":"Förhandsvisningen av dokumentet bearbetas. Försök igen senare."}}},"tr":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Bu belge Canvas içinde görüntülenemez.","document_preview_processing":"Döküman ön izlemesi hala işleniyor. Lütfen daha sonra tekrar deneyin."}}},"zh-Hans":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"无法在 Canvas 中显示此文档。","document_preview_processing":"目前正在处理文档预览。请稍后再试。"}}},"zh-Hant":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"在 Canvas 中無法顯示此文件。","document_preview_processing":"文件預覽目前正在處理中。請稍後重試。"}}}}' ) )
      i( "jQeR" )
      i( "0sPK" )
      var s = n[ "default" ].scoped( "jquery_doc_previews" )
      var r = i( "ouhR" )
      var l = i.n( r )
      i( "GLiE" )
      var u = i( "5Ky4" )
      i( "jYyc" )
      var d = i( "hiU6" )
      i( "JI1W" )
      i( "7LJr" )
      var _ = i( "Vj0+" )
      const m = {
        "application/vnd.openxmlformats-officedocument.wordprocessingml.template": [ 1, 1 ],
        "application/vnd.oasis.opendocument.spreadsheet": [ 1, 1 ],
        "application/vnd.sun.xml.writer": [ 1, 1 ],
        "application/excel": [ 1, 1 ],
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [ 1, 1 ],
        "text/rtf": [ 1, 1 ],
        "application/vnd.openxmlformats-officedocument.spreadsheetml.template": [ 1, 1 ],
        "application/vnd.sun.xml.impress": [ 1, 1 ],
        "application/vnd.sun.xml.calc": [ 1, 1 ],
        "application/vnd.ms-excel": [ 1, 1 ],
        "application/msword": [ 1, 1 ],
        "application/mspowerpoint": [ 1, 1 ],
        "application/rtf": [ 1, 1 ],
        "application/vnd.oasis.opendocument.presentation": [ 1, 1 ],
        "application/vnd.oasis.opendocument.text": [ 1, 1 ],
        "application/vnd.openxmlformats-officedocument.presentationml.template": [ 1, 1 ],
        "application/vnd.openxmlformats-officedocument.presentationml.slideshow": [ 1, 1 ],
        "text/plain": [ 1, 1 ],
        "application/vnd.openxmlformats-officedocument.presentationml.presentation": [ 1, 1 ],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [ 1, 1 ],
        "application/postscript": [ 1, 1 ],
        "application/pdf": [ 1, 1 ],
        "application/vnd.ms-powerpoint": [ 1, 1 ]
      }
      l.a.filePreviewsEnabled = function () {
        return !( a[ "a" ].disableCrocodocPreviews && a[ "a" ].disableGooglePreviews )
      }
      l.a.isPreviewable = function ( e, t ) {
        return l.a.filePreviewsEnabled() && m[ e ] && ( !t || !a[ "a" ][ "disable" + l.a.capitalize( t ) + "Previews" ] && m[ e ][ {
          scribd: 0,
          google: 1
        } [ t ] ] )
      }
      l.a.fn.loadDocPreview = function ( e ) {
        return this.each( ( function () {
          const t = l()( this ),
            i = l.a.extend( {
              width: "100%",
              height: "400px"
            }, t.data(), e )

          function n( e ) {
            if ( i.attachment_view_inline_ping_url ) {
              l.a.ajaxJSON( i.attachment_view_inline_ping_url, "POST", {}, () => {}, () => {} )
              Object( d[ "a" ] )( "Doc Previews", e, JSON.stringify( i, [ "attachment_id", "submission_id", "mimetype", "crocodoc_session_url", "canvadoc_session_url" ] ) )
            }
          }
          if ( !a[ "a" ].disableCrocodocPreviews && i.crocodoc_session_url ) {
            const e = Object( _[ "a" ] )( i.crocodoc_session_url )
            var o = l()( "<iframe/>", {
              src: e,
              width: i.width,
              height: i.height,
              allowfullscreen: "1",
              id: i.id
            } )
            o.appendTo( t )
            o.load( () => {
              n( "crocodoc" )
              l.a.isFunction( i.ready ) && i.ready()
            } )
          } else if ( i.canvadoc_session_url ) {
            const e = l()( '<div style="overflow: auto; resize: vertical;        border: 1px solid transparent; height: 100%;"/>' )
            e.appendTo( t )
            const a = void 0 !== i.iframe_min_height ? i.iframe_min_height : "800px"
            const s = Object( _[ "a" ] )( i.canvadoc_session_url )
            o = l()( "<iframe/>", {
              src: s,
              width: i.width,
              allowfullscreen: "1",
              css: {
                border: 0,
                overflow: "auto",
                height: "99%",
                "min-height": a
              },
              id: i.id
            } )
            o.appendTo( e )
            o.load( () => {
              n( "canvadocs" )
              l.a.isFunction( i.ready ) && i.ready()
            } )
          } else if ( !a[ "a" ].disableGooglePreviews && ( !i.mimetype || l.a.isPreviewable( i.mimetype, "google" ) ) && i.attachment_id || i.public_url ) {
            const e = function () {
              const e = "//docs.google.com/viewer?" + l.a.param( {
                embedded: true,
                url: i.public_url
              } )
              i.ajax_valid && !i.ajax_valid() || l()( '<iframe src="' + Object( u[ "a" ] )( e ) + '" height="' + i.height + '" width="100%" />' ).appendTo( t ).load( () => {
                n( "google" )
                l.a.isFunction( i.ready ) && i.ready()
              } )
            }
            if ( i.public_url ) e()
            else if ( i.attachment_id ) {
              let a = `/api/v1/files/${i.attachment_id}/public_url.json`
              i.submission_id && ( a += "?" + l.a.param( {
                submission_id: i.submission_id
              } ) )
              if ( i.verifier ) a += `${i.submission_id?"&":"?"}verifier=${i.verifier}`
              else {
                const e = window.location.search.match( /verifier=([^&]+)(?:&|$)/ )
                const t = e && e[ 1 ]
                t && ( a += `${i.submission_id?"&":"?"}verifier=${t}` )
              }
              t.loadingImage()
              l.a.ajaxJSON( a, "GET", {}, a => {
                t.loadingImage( "remove" )
                if ( a && a.public_url ) {
                  l.a.extend( i, a )
                  e()
                }
              } )
            }
          } else l.a.filePreviewsEnabled() && ( i.attachment_preview_processing ? t.html( "<p>" + Object( u[ "a" ] )( s.t( "errors.document_preview_processing", "The document preview is currently being processed. Please try again later." ) ) + "</p>" ) : t.html( "<p>" + Object( u[ "a" ] )( s.t( "errors.cannot_view_document_in_canvas", "This document cannot be displayed within Canvas." ) ) + "</p>" ) )
        } ) )
      }
    },
    mykf: function ( e, t, i ) {
      "use strict"
      const a = () => {
        const e = ENV.LTI_LAUNCH_FRAME_ALLOWANCES || []
        return e.join( "; " )
      }
      t[ "a" ] = a
    },
    rnoQ: function ( e, t, i ) {
      "use strict"
      var a = i( "pQTu" )
      var n = i( "m0r6" )
      Object( n[ "a" ] )( JSON.parse( '{"ar":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"اختصارات لوحة المفاتيح"}}},"ca":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Dreceres del teclat"}}},"cy":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Bysellau Hwylus"}}},"da":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Genvejstaster"}}},"da-x-k12":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Genvejstaster"}}},"de":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Tastenkombinationen"}}},"el":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Συντομεύσεις πληκτρολογίου"}}},"en-AU":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Keyboard Shortcuts"}}},"en-AU-x-unimelb":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Keyboard Shortcuts"}}},"en-CA":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Keyboard Shortcuts"}}},"en-GB":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Keyboard shortcuts"}}},"en-GB-x-ukhe":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Keyboard shortcuts"}}},"es":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Atajos del teclado"}}},"fa":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"میانبرهای صفحه کلید"}}},"fi":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Pikanäppäimet"}}},"fr":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Raccourcis clavier"}}},"fr-CA":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Raccourcis clavier"}}},"he":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"קיצורי מקלדת"}}},"ht":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Rakousi Klavye"}}},"hu":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Billentyűparancsok"}}},"hy":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Արագ հասանելիության ստեղներ"}}},"is":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Flýtilyklar"}}},"it":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Scelte rapide da tastiera"}}},"ja":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"キーボード ショートカット"}}},"ko":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"키보드 단축키"}}},"mi":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Pokatata papapātuhi"}}},"nb":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Snarveier"}}},"nb-x-k12":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Snarveier"}}},"nl":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Sneltoetsen"}}},"nn":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Hurtigtastar"}}},"pl":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Skróty klawiaturowe"}}},"pt":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Atalhos de teclado"}}},"pt-BR":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Atalhos de Teclado"}}},"ru":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Клавиши быстрого доступа"}}},"sv":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Tangentbordsgenvägar"}}},"sv-x-k12":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Tangentbordsgenvägar"}}},"tr":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Klavye Kısayolları"}}},"zh-Hans":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"键盘捷径"}}},"zh-Hant":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"鍵盤快速鍵"}}}}' ) )
      i( "jQeR" )
      i( "0sPK" )
      var o = a[ "default" ].scoped( "KeyboardNavDialog" )
      var s = i( "FIFq" )
      var r = i( "ouhR" )
      var l = i.n( r )
      i( "YGE8" )
      var u = function ( e, t ) {
          for ( var i in t ) d.call( t, i ) && ( e[ i ] = t[ i ] )

          function a() {
            this.constructor = e
          }
          a.prototype = t.prototype
          e.prototype = new a
          e.__super__ = t.prototype
          return e
        },
        d = {}.hasOwnProperty
      t[ "a" ] = function ( e ) {
        u( t, e )

        function t() {
          return t.__super__.constructor.apply( this, arguments )
        }
        t.prototype.el = "#keyboard_navigation"
        t.prototype.initialize = function () {
          t.__super__.initialize.apply( this, arguments )
          this.bindOpenKeys
          return this
        }
        t.prototype.render = function ( e ) {
          this.$el.html( e )
          return this
        }
        t.prototype.bindOpenKeys = function () {
          var e
          e = null
          return l()( document ).keydown( ( t = this, function ( i ) {
            var a
            a = 191 === i.keyCode && i.shiftKey
            if ( a && !l()( i.target ).is( ":input" ) && !ENV.disable_keyboard_shortcuts ) {
              i.preventDefault()
              if ( !t.$el.is( ":visible" ) ) {
                e = document.activeElement
                return t.$el.dialog( {
                  title: o.t( "titles.keyboard_shortcuts", "Keyboard Shortcuts" ),
                  width: 400,
                  height: "auto",
                  close: function () {
                    l()( "li", this ).attr( "tabindex", "" )
                    if ( e ) return l()( e ).focus()
                  }
                } )
              }
              t.$el.dialog( "close" )
              if ( e ) return l()( e ).focus()
            }
          } ) )
          var t
        }
        return t
      }( s[ "View" ] )
    }
  }
] )

//# sourceMappingURL=110-c-2d90132d94.js.map
