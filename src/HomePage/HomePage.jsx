import { AppBar, Box, Button, Container, Grid, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import logo_heading from './Logo_with_text.svg'
import Divider from '@mui/material/Divider';
import Vendor_Logo from './avatar1.webp'
import Vendor_Logo2 from './meet.webp'
import first from './first.webp'
import second from './second.webp'
import third from './third.webp'
import fourth from './fourth.webp'
import For_Investor from './download.png'
import NS from './Naveen-surya.webp'
import FCC from './FCC.webp'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

const useStyles = makeStyles(theme=>({
    headingTop:{
        backgroundColor:'black',
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    HeadingTypo:{
        
        padding: '4px 4px 4px 4px'
    },
    appBar:{
        backgroundColor:'white', 
    },
    boxDiv:{
        display:'flex',
        justifyContent:'center'
    },
    box:{
        marginTop:theme.spacing(2),
        display:'flex',
        justifyContent:'space-between',
        width: '90%'
    },
    fullMenu:{
        display:'flex',
        alignItems:'center'
    },
    centerMenu:{
        display:'flex',
        justifyContent:'space-between',
        width:'200px',
    },
    rightMenu:{
        display:'flex',
        alignItems:'center',
    },
    btn_getStarted:{
        marginRight:'10px',
        textTransform:'none'
    },
    login:{
        color:'#6D6D6D',
        marginRight:'30px',
        marginLeft:'60px'
    },
    centerItem:{
        marginRight:'30px',
        color:'#6D6D6D',
    },
    box2:{
        marginLeft:theme.spacing(9),
        marginRight:theme.spacing(9),
        marginTop:theme.spacing(8)
    },
    heroText:{
        color:'black',
        // paddingRight:theme.spacing(10)
    },
    divider:{
        // color:'red',
        background:'yellow',
        marginTop:theme.spacing(5),
        marginBottom:theme.spacing(5),
        width:'15%'
    },
    paper_right:{
        // height:'400px',
        width:'500px'
    },
    subHero:{
        // paddingRight:theme.spacing(12)
        color:'#6D6D6D',
        fontSize:'20px'
    },
    grid_right:{
        display:'flex',
        justifyContent:'flex-end'
    },
    svg:{
       
    },
    top_sec:{
        marginTop:theme.spacing(4),
        // border: '1px solid green',
        // height:'200px',
        display:'flex'
        
    },
    small_logo:{
        // border:'1px solid red',
        height: theme.spacing(10),
        width:theme.spacing(10)
    },
    vendor_name:{
        paddingBottom:theme.spacing(1),
        fontWeight:'800px',
        color:'black'
    },
    vendor_subtxt:{
        color: '#6D6D6D',
    },
    status:{
        // border: '1px solid blue',
        display:'flex'
    },
    status_left:{
        width:'50%',
        display:'flex',
        alignItems:'end'
        
    },
    status_right:{
        width:'50%'
    },
    fintech:{
        fontSize:'12px',
        // backgroundColor:'#6D6D6D'
    },
    financial_services:{
        fontSize: '12px',
        // backgroundColor:'#6D6D6D'
    },
    status_small:{
        
    },
    fin:{
        backgroundColor:'#D1D1D1',
        marginRight:theme.spacing(),
        paddingTop:theme.spacing(0.4),
        paddingBottom:theme.spacing(0.4),
        paddingLeft:theme.spacing(0.4),
        paddingRight:theme.spacing(0.4),
        fontSize:'8px'

    },
    serv:{
        backgroundColor:'#D1D1D1',
        marginRight:theme.spacing(),
        paddingTop:theme.spacing(0.4),
        paddingBottom:theme.spacing(0.4),
        paddingLeft:theme.spacing(0.4),
        paddingRight:theme.spacing(0.4),
        fontSize:'8px'

    },
    level1:{
        display:'flex',
        justifyContent:'flex-end',

    },
    level2:{
        display:'flex'
    },
    closesin:{
        marginLeft: theme.spacing(2)
    },
    common:{
        color:'#6D6D6D'
    },
    divider2:{
        marginTop:theme.spacing(4),
        marginBottom:theme.spacing()
    },
    view_all:{
        display:'flex',
        justifyContent:'center',
        marginTop:theme.spacing(2.5),
        marginBottom:theme.spacing(3.5)
    },
    vendor_name2:{
        paddingBottom:theme.spacing(1),
        paddingLeft: theme.spacing(),
        fontWeight:'800px',
        color:'black',
    },
    vendor_subtxt2:{
        color: '#6D6D6D',
        paddingLeft: theme.spacing(1)
    },
    subtxt_common:{
        fontSize:'12px'
    },
    get_started_hero:{
        marginTop:theme.spacing(3)
    },
    RuFounder:{
        display:'flex',
        marginTop:theme.spacing(3)
    },
    Ru:{
        color:'#6D6D6D'
    },
    raise_capital:{
        color: 'blue'
    },
    arrow:{
        fontSize:'30px',
        fontWeight:'800'
    },
    backed:{
        // border: '1px solid red',
        height:theme.spacing(30),
        marginTop: theme.spacing(15),
        backgroundColor:'#f4f4f3',
        paddingBottom:theme.spacing(5)
    },
    backed_heading:{
        paddingTop:theme.spacing(7) ,
        textAlign:'center'
    },
    typoBacked:{
        // backgroundColor:'red',
        // fontWeight:'bolder'
        fontSize:'15px'
    },
    divider3:{
        // color: 'yellow',
        textAlign:'center',
        marginLeft:'auto',
        marginRight:'auto',
        display:'flex',
        justifyContent:'center',
        marginTop:theme.spacing(2)
    },
    div3:{
        color:'yellow'
    },
    images:{
        display:'flex',
        justifyContent:'space-evenly',
        marginTop:theme.spacing(5),
        // marginBottom:theme.spacing(100)
    },
    image3:{
        backgroundColor:''
    },
    forInvestors:{
        textAlign:'center',
        fontWeight:'bolder'
    },
    container_shows:{
        // border: '1px solid red',
        // height:theme.spacing(70),
        marginTop:theme.spacing(7)
        // display:'flex'
    },
    coll1:{
        // border:'1px solid blue',
        // height: '500px',
        width:'300px'
    },
    coll2:{
        // border:'1px solid blue',
        // height: '500px',
        width:'300px'
    },
    coll3:{
        // border:'1px solid blue',
        // height: '500px',
        width:'300px'
    },
    container_div:{
        display:'flex',
        justifyContent:'space-around'
    },
    strong:{
        textAlign:'center',
        fontSize:'30px',
        fontWeight:'800'
    },
    small:{
        textAlign:'center',
        fontSize:'18px',
        paddingTop:theme.spacing(3)
    },
    btn_learn_more:{
        textAlign:'center',
        marginTop:theme.spacing(9)
    },
    container_profile:{
        // border:'1px solid red',
        // height:'400px',
        marginTop:theme.spacing(9),
        backgroundColor:'#dff8fe'
    },
    makes:{
        paddingLeft:theme.spacing(2),
        paddingRight:theme.spacing(2),
        paddingTop:theme.spacing(6)
    },
    info:{
        display:'flex',
        marginTop:theme.spacing(4),
        paddingBottom: theme.spacing(8)
    },
    img:{
        borderRadius:'9px'
    },
    profile_infos:{
        marginLeft: theme.spacing(3)
    },
    name:{
        marginBottom:theme.spacing()
    },
    desig:{
        marginBottom: '4px',
        color:'blue'
    },
    container_founders:{
        // border: '1px solid red',
        // height:'600px'
    },
    founder_div:{
        // border: '1px solid blue',
        display:'flex'

    },
    article1:{
        // border:'1px solid black',
        width:'50%',
        textAlign:'center',
        marginTop:'-140px'
    },
    image_article1:{
        // border:'1px solid green',
        width:'50%'
    },
    btn_learn_more:{
        textAlign:'left',
        marginTop:theme.spacing(2),
    },
    title:{
        fontWeight:"800",
        fontSize:'30px',
        marginBottom:theme.spacing(2)
    },
    box_footer:{
        // border:'1px solid blue',
        // height:'400px',
        backgroundColor:'#f4f4f3'
        // display:'flex'
    },
    left_footer:{
        // border:'1px solid red',
        width:'50%',
        color:'#858584'
        // height:'100px'
    },
    right_footer:{
        // border:'1px solid green',
        width:'50%',
        // height:'100px'
    },
    container_footer:{
        display:'flex',
        paddingTop:theme.spacing(5),
        paddingBottom:theme.spacing(5)
    },
    icons:{
        display:'flex',
        color:'black',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:theme.spacing(2),
        paddingRight:theme.spacing(29)
    },
    contact_us:{
        marginTop:theme.spacing(2)
    },
    address:{
        marginTop:theme.spacing(3)
    },
    reserve:{
        marginTop:theme.spacing(2),
        marginBottom:theme.spacing(8)
    },
    investors_footer:{
        // border:'1px solid green',
        width:'33%',
        lineHeight:'22px'
    },
    startups:{
        // border:'1px solid red',
        width:'33%',
        lineHeight:'22px'
    },
    print:{
        // border:'1px solid black',
        width:'33%',
        lineHeight:'22px'
    },
    footer_holder:{
        display:'flex',
        marginBottom:'30px'
    },
    para:{
        marginTop:theme.spacing(2)
    }

}))

const HomePage = () => {
    const classes = useStyles()
    return (
    <>
        <header>
        
            <div className={classes.headingTop}>
                <Typography fontWeight={600} fontSize={16} className={classes.HeadingTypo}> <small>Celebrate India's independence with our Freedom campaign. Enjoy 40% off on convenience fees if you are amongst the first 40% to subscribe to any of our exciting new campaigns!</small> </Typography>
            </div>
            <div className={classes.boxDiv}>
            <Box className={classes.box}  >
                <div className={classes.appBar}>
                    <img height={50} width={100} src={logo_heading} alt="" />
                </div>
                <div className={classes.fullMenu}>
                    <div className={classes.rightMenu}>
                        <div className={classes.centerItem}>
                        <Typography fontWeight={800} >Deals</Typography>
                        </div>
                        <div className={classes.centerItem}>
                        <Typography fontWeight={800} >Founders</Typography>
                        </div>
                        <div className={classes.centerItem}>
                        <Typography fontWeight={800} >Investors</Typography>
                        </div>
                        <div className={classes.centerItem}>
                        <Typography fontWeight={800} >Private Rounds</Typography>
                        </div>
                        <div className={classes.centerItem}>
                        <Typography fontWeight={800} >Learn</Typography>
                        </div>
                        <div className={classes.centerItem}>
                        <Typography fontWeight={800} >Community</Typography>
                        </div>
                        <div className={classes.login}>
                        <Typography fontWeight={800}  >Login</Typography>
                        </div>
                        <div className={classes.btn_getStarted}>
                        <Button  size='medium' sx={{textTransform:'none'}} fullWidth={true} variant='contained'>Get Started</Button>
                        </div>
                    </div>
                </div>
            </Box>
            </div>
        </header>
        <main>
            <div>
            <Box className={classes.box2}>
                <Grid container>
                    <Grid item lg={6} >
                        <Paper elevation={0}>
                            <Typography fontWeight={800} className={classes.heroText} variant='h3'>
                                Where the best startups raise from their community
                            </Typography>
                            <div className={classes.divider}>
                            <Divider width="15%" sx={{ borderBottomWidth:'5px' ,variant:'small',size:'sm'}} className={classes.divider} />
                            </div>
                            <Typography className={classes.subHero} variant='h5'>We are bringing community stocks to you. Own a part of the next big startup and help them on the way to the top.</Typography>
                            <div className={classes.get_started_hero}>
                                <Button sx={{textTransform:'none', fontSize:'20px', fontWeight:'800' ,padding:'10px 80px 10px 80px'}} size='large' variant='contained'>Get Started</Button>
                            </div>
                            <div className={classes.RuFounder}>
                                <Typography className={classes.Ru}>Are you a founder?</Typography>
                                <Typography className={classes.raise_capital}> Raise Capital on Tyke</Typography>
                            </div>
                        </Paper>
                    </Grid>
                     <Grid item lg={6} className={classes.grid_right} >
                     {/* <div>
                      <svg className={classes.svg} class="css-wb1j5y" viewBox="0 0 1200 209" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".4" d="M167.468 17.028c27.354 1.644 46.347 27.93 39.319 54.417l-11.422 43.046a43.358 43.358 0 0 0-1.373 8.522l-2.672 44.455c-1.644 27.355-27.93 46.347-54.417 39.319l-43.046-11.422a43.35 43.35 0 0 0-8.522-1.373l-44.455-2.671c-27.355-1.645-46.347-27.93-39.32-54.417l11.423-43.047c.74-2.787 1.2-5.642 1.373-8.521l2.671-44.456c1.645-27.354 27.93-46.347 54.417-39.319l43.047 11.422c2.787.74 5.642 1.2 8.521 1.373l44.456 2.672Z" fill="url(#b)"></path><defs><linearGradient id="b" x1="-146.624" y1="714.447" x2="-434.144" y2="318.988" gradientUnits="userSpaceOnUse"><stop stop-color="#07D3FC"></stop><stop offset="1" stop-color="#DAF5FB"></stop></linearGradient></defs></svg>
                      </div> */}
                        <Paper elevation={24} className={classes.paper_right}>
                            <Container>
                                <div className={classes.paper_header}>
                                    <div className={classes.top_sec}>
                                        <div className={classes.small_logo}>
                                            <img src={Vendor_Logo} height={70} alt="Logo" />
                                        </div>
                                        <div>
                                            <div className={classes.vendor_name}>
                                                <Typography variant=''>
                                                    <strong>
                                                        DigiWill
                                                    </strong>
                                                </Typography>
                                            </div>
                                            <div className={classes.vendor_subtxt}>
                                                <Typography className={classes.subtxt_common}>
                                                    India's One Stop Solution for Financial Inheritance.
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.status}>
                                        <div className={classes.status_left}>
                                            <div className={classes.fintech}>
                                            <small className={classes.fin}>FINTECH</small>
                                            </div>
                                            <div className={classes.financial_services}>
                                            <small className={classes.serv} >FINANCIAL SERVICE</small>  </div>
                                        </div>
                                        <div className={classes.status_right}>
                                            <div className={classes.level1}>
                                            <div className={classes.level2}>
                                                <div className={classes.raised}>
                                                    <div>
                                                        <small className={classes.common}>Raised</small>
                                                    </div>
                                                    <div>
                                                        <strong>22.25%</strong>
                                                    </div>
                                                </div>
                                                <div className={classes.closesin}>
                                                    <div>
                                                        <small className={classes.common}>Closes In</small>
                                                    </div>
                                                    <div>
                                                    <strong>20 days</strong>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className={classes.divider2}>
                                    <Divider />
                                    </div>
                                </div>

                                <div className={classes.paper_header}>
                                    <div className={classes.top_sec}>
                                        <div className={classes.small_logo}>
                                            <img src={Vendor_Logo2} height={70} alt="Logo" />
                                        </div>
                                        <div>
                                            <div className={classes.vendor_name2}>
                                                <Typography>
                                                    <strong>
                                                        Meatyour
                                                    </strong>
                                                </Typography>
                                            </div>
                                            <div className={classes.vendor_subtxt2}>
                                                <Typography className={classes.subtxt_common}>
                                                    MEATYOUR offers not just fresh and healthy but unique Non-veg / Egg products...
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.status}>
                                        <div className={classes.status_left}>
                                            <div className={classes.fintech}>
                                            <small className={classes.fin}>FOOD PRODUCTS</small>
                                            </div>
                                            <div className={classes.financial_services}>
                                            <small className={classes.serv} >D2C</small>  </div>
                                        </div>
                                        <div className={classes.status_right}>
                                            <div className={classes.level1}>
                                            <div className={classes.level2}>
                                                <div className={classes.raised}>
                                                    <div>
                                                        <small className={classes.common}>Raised</small>
                                                    </div>
                                                    <div>
                                                        <strong>56.00%</strong>
                                                    </div>
                                                </div>
                                                <div className={classes.closesin}>
                                                    <div>
                                                        <small className={classes.common}>Closes In</small>
                                                    </div>
                                                    <div>
                                                    <strong>15 days</strong>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className={classes.divider2}>
                                    <Divider />
                                    </div>

                                    <div>
                                        <div className={classes.view_all}>
                                            <Typography fontWeight={800}>
                                                <small>
                                                    View All <b className={classes.arrow}>&rarr;</b> 
                                                </small>
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            </div>
            <Box>
                <div className={classes.backed}>
                    <div className={classes.backed_heading}>
                        <Typography  >
                        <b className={classes.typoBacked}>BACKED BY THE BEST IN THE BUSINESS</b>
                        </Typography>
                        <div className={classes.divider3}>
                        <Divider className={classes.div3} sx={{borderBottomWidth:'5px',width:'40px',backgroundColor:'yellow'}}/>
                        </div>
                    </div>
                    <div className={classes.images}>
                        <div className={classes.image1}>
                            <img src={first} alt="1" />
                        </div>
                        <div className={classes.image2}>
                            <img src={second} alt="2" />
                        </div>
                        <div className={classes.image3}>
                            <img height={50} width={50} src={third} alt="3" />
                        </div>
                        <div  className={classes.image4}>
                            <img height={50} width={50} src={fourth} alt="4" />
                        </div>
                    </div>
                </div>
                
            </Box>
            <div className={classes.forInvestors}>
                <h1 variant='h4'>For Investors</h1>
            </div>

            <div>
                <Container className={classes.container_shows}>
                    <div className={classes.container_div}>
                    <div className={classes.coll1}>
                        <div className={classes.show1}>
                            <img height={300} width={300} src={For_Investor} alt="show1" />
                        </div>
                        <div className={classes.text1}>
                            <div className={classes.strong}>
                            <strong className={classes.strong}>
                                Invest Instantly
                            </strong>
                            </div>
                            <div className={classes.small}>
                            <small >From discovery to signing the term sheet, it's completely online and seamless</small>
                            </div>
                        </div>
                    </div>
                     <div className={classes.coll2} >
                        <div className={classes.show1}>
                            <img height={300} width={300} src={For_Investor} alt="show1" />
                        </div>
                        <div className={classes.text1}>
                            <div className={classes.strong}>
                            <strong className={classes.strong}>
                                KPI Tracking
                            </strong>
                            </div>
                            <div className={classes.small}>
                            <small >Review, Monitor & Track your consolidated portfolio via an easy-to-use dashboard</small>
                            </div>
                        </div>
                    </div>
                     <div className={classes.coll3}>
                        <div className={classes.show1}>
                            <img height={300} width={300} src={For_Investor} alt="show1" />
                        </div>
                        <div className={classes.text1}>
                            <div className={classes.strong}>
                            <strong className={classes.strong}>
                                Exclusive Community
                            </strong>
                            </div>
                            <div className={classes.small}>
                            <small >An exclusive space created to empower our users to have an enriching investment experience</small>
                            </div>
                        </div>
                    </div>
                    </div>
                </Container>
            </div>
            <div>
                <div className={classes.btn_learn_more}>
                    <div>
                        <Button sx={{textTransform:'none',fontSize:'20px',padding:'0px 30px 0px 30px'}} variant='contained'>Learn More</Button>
                    </div>
                </div>
            </div>
            <div>
                <Container className={classes.container_profile}>
                    <div>

                        <div className={classes.makes}>
                            <text style={{fontSize:'30px'}}>
                                    Tyke makes startup investing look easy. Not only can I manage my own deals but I can invest in promising startups as well.
                            </text>
                            <div className={classes.info}>
                                <div className={classes.profile_image}>
                                <img className={classes.img} height={120} width={120} src={NS} alt="NS" />
                                    
                                </div>
                                <div className={classes.profile_infos}>
                                    <div className={classes.name}><strong>Nivin Saurya</strong></div>
                                    <div className={classes.desig}><text>Chairman (Non-Executive)</text></div>
                                    <div className={classes.desig}><text>Fintech Convergence Council</text></div>
                                    <div><img src={FCC} height='40px' width='' alt="FCC" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div>
                <div style={{textAlign:'center',marginTop:'80px',marginBottom:'80px'}}>
                    <Typography fontWeight={800} variant='h3'>For Founders</Typography>
                </div>
                <Container className={classes.container_founders}>
                <div className={classes.founder_div}>
                    <div className={classes.image_article1}>
                        <div className={classes.title}>A new way to virality</div>
                        <div className={classes.desc}>Let your personal & professional network, partners and users be a part of your mission. Raise capital from your biggest flagbearers.</div>
                        <div className={classes.btn_learn_more}>
                            <Button style={{color:'blue'}}>Start Now</Button>
                        </div>
                    </div>
                    <div className={classes.article1}>
                        <img src={For_Investor} heigh={800} width={500} alt="FI" />
                    </div>

                </div>

                <div className={classes.founder_div}>
                      <div className={classes.article1}>
                        <img src={For_Investor} heigh={800} width={500} alt="FI" />
                    </div>
                    <div className={classes.image_article1}>
                        <div className={classes.title}>Close your deals with Tyke</div>
                        <div className={classes.desc}>Tyke's powerful Private Deal Management Option enables Founders, Angel Networks, Syndicates and VCs to take their fundraising process online.</div>
                        <div className={classes.btn_learn_more}>
                            <Button style={{color:'blue'}}>Learn More</Button>
                        </div>
                    </div>
                </div>

                <div className={classes.founder_div}>
                    <div className={classes.image_article1}>
                        <div className={classes.title}>AUser feedback, made simple</div>
                        <div className={classes.desc}>Be it investor updates or user engagement, we make sure you impress your customers. Experience convenience with our Community and Analytics.</div>
                        <div className={classes.btn_learn_more}>
                            <Button style={{color:'blue'}}>Learn More</Button>
                        </div>
                    </div>
                    <div className={classes.article1}>
                        <img src={For_Investor} heigh={800} width={500} alt="FI" />
                    </div>

                </div>

                <div className={classes.founder_div}>
                      <div className={classes.article1}>
                        <img src={For_Investor} heigh={800} width={500} alt="FI" />
                    </div>
                    <div className={classes.image_article1}>
                        <div className={classes.title}>A new way to virality</div>
                        <div className={classes.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus itaque magni, omnis possimus suscipit! Fugit, obcaecati vero. Nisi reprehenderit corrupti assumenda odit perferendis error!</div>
                        <div className={classes.btn_learn_more}>
                            <Button style={{color:'blue'}}>Learn More</Button>
                        </div>
                    </div>
                </div>
                </Container>
            </div>

            <div>
                <div className={classes.join}>
                    <div>
                        <Typography style={{fontWeight:'800',textAlign:'center'}} variant='h4'>Join the best Founders & Investors todays!</Typography>
                    </div>
                    <div style={{textAlign:'center',marginTop:'30px',marginBottom:'80px'}}>
                        <Button sx={{backgroundColor:'#07d3fc'}} variant='contained'>Founders</Button>
                        <Button sx={{marginLeft:'30px' ,backgroundColor:'#e8f5f5',color:'#07d3fc'}} variant='contained'>Investors</Button>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <Box className={classes.box_footer}>
                <Container >
                    <div className={classes.container_footer}>
                        <div className={classes.left_footer}>
                            <div><img src={logo_heading} height={70} width={200} alt="Logo" /></div>
                            <div><Typography>Making startup investments accessible</Typography></div>
                            <div className={classes.icons}>
                            <LinkedInIcon/>
                            <InstagramIcon/>
                            <FacebookRoundedIcon/>
                            <Button sx={{textTransform:'none'}} variant='contained' startIcon={<MailOutlineRoundedIcon/>}>Support</Button>
                            </div>
                            <div>
                                <div className={classes.contact_us}>
                                    <Typography>Contact us:</Typography>
                                    <Typography>support@tykeinvest.com</Typography>
                                    <Typography>+91-8447748631</Typography>
                                </div>
                            </div>
                            <div>
                                <div className={classes.address}>
                                    <Typography>5th Floor,3-A Jai Hind Estate, Dr. Atmaram Merchant Road Bhuleshwar, Kalbadevi,Mumbai - 400002</Typography>
                                </div>
                            </div>
                            <div>
                                <div className={classes.reserve}>
                                <div >
                                    <small>Tyke Technologies Pvt Ltd</small>
                                    </div>
                                    <div>
                                    <small>2022 All Right Reserved</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.right_footer}>
                            <div className={classes.footer_holder}>
                                <div className={classes.investors_footer}>
                                    <div>
                                        <strong>Investors</strong>
                                    </div>
                                    <div style={{color:'#858584'}}>
                                        <small  >Invest</small>
                                    </div>
                                    <div style={{color:'#858584'}}>
                                        <small>How it works</small>
                                    </div>
                                    <div style={{color:'#858584'}}>
                                        <small>Learn</small>
                                    </div>
                                </div>
                                <div className={classes.startups}>
                                    <div>
                                        <strong>Startups</strong>
                                    </div>
                                    <div style={{color:'#858584'}}>
                                        <small >Log In</small>
                                    </div>
                                    <div>
                                        <small style={{color:'#858584'}}>Raise</small>
                                    </div>
                                </div>
                                <div className={classes.print}>
                                    <div>
                                        <strong>Fine Print</strong>
                                    </div>
                                    <div style={{color:'#858584'}}>
                                        <small>Risk of Investment</small>
                                    </div>
                                    <div style={{color:'#858584'}}>
                                        <small>Privacy Policy</small>
                                    </div>
                                    <div style={{color:'#858584'}}>
                                        <small>Terms and Conditions</small>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{color:'#858584'}} className={classes.para}><small>All trademarks and logos or registered trademarks and logos found on this Site or mentioned herein belong to their respective owners and are solely being used for informational purposes.</small></div>
                                <div style={{color:'#858584'}} className={classes.para}><small>Information provided herein has been gathered from public sources. Tyke Technologies Pvt Ltd disclaims any and all responsibility in connection with veracity of this data. Information presented on this website is for educational purposes only and should not be treated as legal, financial , or any other form of advice. Tyke Technologies Pvt Ltd is not liable for financial or any other form of loss incurred by the user or any affiliated party on the basis of information provided herein.</small></div>
                                <div style={{color:'#858584'}} className={classes.para}><small>Tyke Technologies Pvt Ltd is neither a stock exchange nor does it intend to get recognized as a stock exchange under the Securities Contracts Regulation Act, 1956. Tyke Technologies Pvt Ltd is not authorized by the capital markets regulator to solicit investments. The securities traded on these platforms are not traded on any regulated exchange. Tyke also provides that it does not facilitate any online or offline buying, selling, or trading of securities.</small></div>
                                <div style={{color:'#858584'}} className={classes.para}><small>This Site will be updated on a regular basis.</small></div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </Container>
            </Box>
        </footer>

        











        
    </>
  )
}

export default HomePage