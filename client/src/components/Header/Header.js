import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styles from './Header.module.sass';
import CONSTANTS from '../../constants';
import { getUserAction, clearUserStore, headerRequest } from '../../actions/actionCreator';

class Header extends React.Component {
  componentDidMount() {
    if (!this.props.data) {
      this.props.getUser();
    }
  }

    logOut = () => {
      localStorage.clear();
      this.props.clearUserStore();
      this.props.history.replace('/login');
    };

    startContests = () => {
      this.props.history.push('/startContest');
    };

    renderLoginButtons = () => {
      if (this.props.data) {
        return (
          <>
            <div className={styles.userInfo}>
              <img
                src={this.props.data.avatar === 'anon.png' ? CONSTANTS.ANONYM_IMAGE_PATH : `${CONSTANTS.publicURL}${this.props.data.avatar}`}
                alt="user"
              />
              <span>{`Hi, ${this.props.data.displayName}`}</span>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
              <ul>
                <li>
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>View Dashboard</span>
                  </Link>
                </li>
                <li><Link to="/account" style={{ textDecoration: 'none' }}><span>My Account</span></Link></li>
                <li>
                  <Link
                    to="#"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Messages</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" style={{ textDecoration: 'none' }}><span>Affiliate Dashboard</span></Link>
                </li>
                <li><span onClick={this.logOut}>Logout</span></li>
              </ul>
            </div>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`} className={styles.emailIcon} alt="email" />
          </>
        );
      }
      return (
        <>
          <Link to="/login" style={{ textDecoration: 'none' }}><span className={styles.btn}>LOGIN</span></Link>
          <Link to="/registration" style={{ textDecoration: 'none' }}>
            <span
              className={styles.btn}
            >
              SIGN UP
            </span>
          </Link>
        </>
      );
    };

    render() {
      if (this.props.isFetching) {
        return null;
      }
      return (
        <div className={styles.headerContainer}>
          <div className={styles.fixedHeader}>
            <span className={styles.info}>Squadhelp recognized as one of the Most Innovative Companies by Inc Magazine.</span>
            <a href="#">Read Announcement</a>
          </div>
          <div className={styles.loginSignnUpHeaders}>
            <div className={styles.numberContainer}>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
              <span>(877)&nbsp;355-3585</span>
            </div>
            <div className={styles.userButtonsContainer}>
              {this.renderLoginButtons()}
            </div>
          </div>
          <div className={styles.navContainer}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`} className={styles.logo} alt="blue_logo" />
            <div className={styles.leftNav}>
              <div className={styles.nav}>
                <ul>
                  <li>
                    <span>NAME IDEAS</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><a href="http://localhost:3000/#">Beauty</a></li>
                      <li><a href="http://localhost:3000/#">Consulting</a></li>
                      <li><a href="http://localhost:3000/#">E-Commerce</a></li>
                      <li><a href="http://localhost:3000/#">Fashion & Clothing</a></li>
                      <li><a href="http://localhost:3000/#">Finance</a></li>
                      <li><a href="http://localhost:3000/#">Real Estate</a></li>
                      <li><a href="http://localhost:3000/#">Tech</a></li>
                      <li className={styles.last}>
                        <a href="http://localhost:3000/#">More Categories</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>CONTESTS</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><a href="http://localhost:3000/#">HOW IT WORKS</a></li>
                      <li><a href="http://localhost:3000/pricing">PRICING</a></li>
                      <li><a href="http://localhost:3000/#">AGENCY SERVICE</a></li>
                      <li><a href="http://localhost:3000/#">ACTIVE CONTESTS</a></li>
                      <li><a href="http://localhost:3000/#">WINNERS</a></li>
                      <li><a href="http://localhost:3000/#">LEADERBOARD</a></li>
                      <li className={styles.last}>
                        <a href="http://localhost:3000/#">
                            BECOME A
                            CREATIVE
</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Our Work</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><a href="http://localhost:3000/#">NAMES</a></li>
                      <li><a href="http://localhost:3000/#">TAGLINES</a></li>
                      <li><a href="http://localhost:3000/#">LOGOS</a></li>
                      <li className={styles.last}>
                        <a href="http://localhost:3000/#">TESTIMONIALS</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Names For Sale</span>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
                    <ul>
                      <li><a href="http://localhost:3000/#">POPULAR NAMES</a></li>
                      <li><a href="http://localhost:3000/#">SHORT NAMES</a></li>
                      <li><a href="http://localhost:3000/#">INTRIGUING NAMES</a></li>
                      <li><a href="http://localhost:3000/#">NAMES BY CATEGORY</a></li>
                      <li><a href="http://localhost:3000/#">VISUAL NAME SEARCH</a></li>
                      <li className={styles.last}>
                        <a href="http://localhost:3000/#">
                            SELL YOUR
                            DOMAINS
</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Blog</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><a href="http://localhost:3000/#">ULTIMATE NAMING GUIDE</a></li>
                      <li><a href="http://localhost:3000/#">POETIC DEVICES IN BUSINESS NAMING</a></li>
                      <li><a href="http://localhost:3000/#">CROWDED BAR THEORY</a></li>
                      <li className={styles.last}>
                        <a href="http://localhost:3000/#">ALL ARTICLES</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {this.props.data && this.props.data.role !== CONSTANTS.CREATOR
                        && <div className={styles.startContestBtn} onClick={this.startContests}>START CONTEST</div>}
            </div>
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => state.userStore;
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(headerRequest()),
  clearUserStore: () => dispatch(clearUserStore()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
