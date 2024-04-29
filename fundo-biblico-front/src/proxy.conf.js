  const PROXI_CONFIG = [
    {
      context:[
        "/api"
      ],

      target :"",
      secure:false,
      changerOrigin:true,
      pathRwrite:[
        "^/",""
      ]
    }
  ]

  modulo.exports = PROXI_CONFIG;
