
import Banner from '../HomepageLayouts/Banner';
import ClubMembership from '../HomepageLayouts/ClubMembership';
import GolfReview from '../HomepageLayouts/GolfReview';
import LatestPhotos from '../HomepageLayouts/LatestPhotos';
import MatchesReview from '../HomepageLayouts/MatchesReview';
import Welcome from '../HomepageLayouts/Welcome';

const Homepage = () => {
 
    return (
        <div>
            <Banner ></Banner>
            <Welcome></Welcome>
            <MatchesReview></MatchesReview>
            <LatestPhotos></LatestPhotos>
            <GolfReview></GolfReview>
            <ClubMembership></ClubMembership>
        </div>
    );
};

export default Homepage;