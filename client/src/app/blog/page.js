'use client';
import { useState } from 'react';
import NormalNavbar from '../Donate/NewComponents/NormalNavbar';
import Footer from '../components/Footer';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const categories = ['All', 'News', 'Stories', 'Updates', 'Events'];
    
    const blogPosts = [
        {
            id: 1,
            title: 'Supporting Religious Freedom in Bangladesh',
            excerpt: 'Recent developments in Bangladesh have raised concerns about religious freedom and the safety of minority communities. Our organization has been working closely with local partners to provide support and advocacy for those affected by persecution.',
            date: 'June 15, 2023',
            author: 'Sarah Johnson',
            category: 'News',
            image: '/bangladeshprotest.avif'
        },
        {
            id: 2,
            title: 'Community Outreach Program Success',
            excerpt: 'Our recent community outreach program has successfully provided support to over 200 families affected by persecution. Through donations and volunteer efforts, we were able to distribute essential supplies and offer counseling services.',
            date: 'May 28, 2023',
            author: 'Michael Chen',
            category: 'Stories',
            image: '/prayer.jpg'
        },
        {
            id: 3,
            title: 'Upcoming Fundraising Gala',
            excerpt: 'Join us for our annual fundraising gala to support our ongoing initiatives for religious freedom and human rights. The event will feature guest speakers, live entertainment, and opportunities to connect with like-minded individuals.',
            date: 'July 10, 2023',
            author: 'Emma Williams',
            category: 'Events',
            image: '/file.svg'
        },
        {
            id: 4,
            title: 'Human Rights Report: Global Trends',
            excerpt: 'Our latest research report examines global trends in religious persecution and human rights violations. The findings highlight areas of concern and provide recommendations for international policy makers and humanitarian organizations.',
            date: 'April 5, 2023',
            author: 'David Rodriguez',
            category: 'Updates',
            image: '/bangladeshprotest.avif'
        },
        {
            id: 5,
            title: 'Volunteer Spotlight: Meet Aisha',
            excerpt: 'In this month\'s volunteer spotlight, we introduce Aisha, who has been dedicating her time to our legal aid program. Her work has helped numerous individuals navigate complex asylum processes and find safety from religious persecution.',
            date: 'March 22, 2023',
            author: 'Priya Patel',
            category: 'Stories',
            image: '/prayer.jpg'
        },
        {
            id: 6,
            title: 'Educational Workshop Series Announced',
            excerpt: 'We\'re excited to announce our new educational workshop series focused on religious tolerance and intercultural understanding. These workshops will be offered in schools, community centers, and online platforms starting next month.',
            date: 'June 8, 2023',
            author: 'James Wilson',
            category: 'Events',
            image: '/file.svg'
        },
        {
            id: 7,
            title: 'Policy Brief: Religious Freedom in South Asia',
            excerpt: 'Our policy team has published a comprehensive brief on the state of religious freedom in South Asia. The document provides analysis of current challenges and opportunities for advocacy and intervention in the region.',
            date: 'February 15, 2023',
            author: 'Sophia Kim',
            category: 'Updates',
            image: '/bangladeshprotest.avif'
        },
        {
            id: 8,
            title: 'Emergency Response to Crisis in Myanmar',
            excerpt: 'In response to the ongoing crisis in Myanmar, our organization has mobilized resources to provide emergency assistance to displaced communities. We are working with local partners to ensure aid reaches those most in need.',
            date: 'May 3, 2023',
            author: 'Thomas Lee',
            category: 'News',
            image: '/prayer.jpg'
        },
        {
            id: 9,
            title: 'Interview: Survivor Stories of Resilience',
            excerpt: 'In this powerful interview series, we share the stories of survivors who have faced religious persecution and found strength to rebuild their lives. Their testimonies highlight both the challenges they\'ve overcome and their hopes for the future.',
            date: 'April 17, 2023',
            author: 'Olivia Martinez',
            category: 'Stories',
            image: '/file.svg'
        },
        {
            id: 10,
            title: 'Annual Conference: Registration Now Open',
            excerpt: 'Registration is now open for our annual conference on religious freedom and human rights. This year\'s theme focuses on building inclusive communities and features keynote speakers from around the world.',
            date: 'June 22, 2023',
            author: 'Robert Johnson',
            category: 'Events',
            image: '/bangladeshprotest.avif'
        },
        {
            id: 11,
            title: 'New Partnership with International Relief Agency',
            excerpt: 'We\'re pleased to announce a new strategic partnership with the International Relief Agency to expand our humanitarian assistance programs. This collaboration will enhance our capacity to respond to crises affecting religious minorities.',
            date: 'March 8, 2023',
            author: 'Jennifer Adams',
            category: 'News',
            image: '/prayer.jpg'
        },
        {
            id: 12,
            title: 'Quarterly Impact Report Released',
            excerpt: 'Our latest quarterly impact report is now available, detailing the outcomes of our programs and initiatives. The report highlights key achievements, challenges, and the stories of individuals whose lives have been positively impacted by our work.',
            date: 'May 15, 2023',
            author: 'Daniel Park',
            category: 'Updates',
            image: '/file.svg'
        }
    ];

    const filteredPosts = selectedCategory === 'All' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <div className="blog-page">
            <NormalNavbar />
            
            {/* Hero Section */}
            <div className="blog-hero" style={{
                height: '400px',
                width: '100%',
                backgroundImage: 'url(/prayer.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '80px'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 72, 48, 0.6)'
                }}></div>
                <div style={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    color: 'white'
                }}>
                    <h1 style={{
                        fontSize: '4rem',
                        fontWeight: 700,
                        marginBottom: '20px',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>Our Blog</h1>
                    <p style={{
                        fontSize: '1.5rem',
                        opacity: 0.95,
                        textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                    }}>Stories, updates, and news about our mission and impact</p>
                </div>
            </div>

            {/* Blog Content */}
            <div className="blog-content" style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px'
            }}>
                {/* Category Filter */}
                <div className="category-filter" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '50px',
                    flexWrap: 'wrap',
                    gap: '15px'
                }}>
                    {categories.map(category => (
                        <button 
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: selectedCategory === category ? '#004830' : 'white',
                                color: selectedCategory === category ? 'white' : '#004830',
                                border: '2px solid #004830',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                
                {/* Featured Post */}
                {filteredPosts.length > 0 && (
                    <div className="featured-post" style={{
                        backgroundColor: '#f8f9fa',
                        borderRadius: '15px',
                        overflow: 'hidden',
                        marginBottom: '60px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            '@media (minWidth: 768px)': {
                                flexDirection: 'row'
                            }
                        }}>
                            <div style={{
                                flex: '1',
                                height: '400px',
                                backgroundImage: `url(${filteredPosts[0].image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}></div>
                            <div style={{
                                flex: '1',
                                padding: '40px'
                            }}>
                                <span style={{
                                    backgroundColor: '#004830',
                                    color: 'white',
                                    padding: '5px 15px',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    display: 'inline-block',
                                    marginBottom: '20px'
                                }}>{filteredPosts[0].category}</span>
                                <h2 style={{
                                    fontSize: '2.5rem',
                                    color: '#004830',
                                    marginBottom: '20px'
                                }}>{filteredPosts[0].title}</h2>
                                <p style={{
                                    fontSize: '1.2rem',
                                    color: '#555',
                                    marginBottom: '30px',
                                    lineHeight: '1.8'
                                }}>{filteredPosts[0].excerpt}</p>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px',
                                    color: '#666',
                                    marginBottom: '30px'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <FaCalendarAlt />
                                        <span>{filteredPosts[0].date}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <FaUser />
                                        <span>{filteredPosts[0].author}</span>
                                    </div>
                                </div>
                                <button style={{
                                    backgroundColor: '#004830',
                                    color: 'white',
                                    padding: '12px 25px',
                                    border: 'none',
                                    borderRadius: '30px',
                                    fontSize: '1.1rem',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s ease'
                                }}>Read More</button>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Blog Posts Grid */}
                <div className="blog-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '30px',
                    marginBottom: '80px'
                }}>
                    {filteredPosts.slice(1).map(post => (
                        <div key={post.id} className="blog-card" style={{
                            backgroundColor: 'white',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}>
                            <div style={{
                                height: '200px',
                                backgroundImage: `url(${post.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}></div>
                            <div style={{ padding: '25px' }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '15px',
                                    color: '#666',
                                    fontSize: '0.9rem'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <FaCalendarAlt />
                                        <span>{post.date}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <FaTag />
                                        <span>{post.category}</span>
                                    </div>
                                </div>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    color: '#004830',
                                    marginBottom: '15px'
                                }}>{post.title}</h3>
                                <p style={{
                                    color: '#555',
                                    marginBottom: '20px',
                                    lineHeight: '1.6'
                                }}>{post.excerpt}</p>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#666' }}>
                                        <FaUser />
                                        <span>{post.author}</span>
                                    </div>
                                    <button style={{
                                        backgroundColor: 'transparent',
                                        color: '#004830',
                                        border: '2px solid #004830',
                                        padding: '8px 15px',
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}>Read More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Newsletter Section */}
                <div className="newsletter-section" style={{
                    backgroundColor: '#004830',
                    padding: '60px',
                    borderRadius: '15px',
                    color: 'white',
                    textAlign: 'center',
                    marginBottom: '80px'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        marginBottom: '20px'
                    }}>Subscribe to Our Newsletter</h2>
                    <p style={{
                        fontSize: '1.2rem',
                        maxWidth: '700px',
                        margin: '0 auto',
                        marginBottom: '30px'
                    }}>Stay updated with our latest news, stories, and events. Join our community today!</p>
                    <div style={{
                        display: 'flex',
                        maxWidth: '600px',
                        margin: '0 auto',
                        gap: '15px'
                    }}>
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            style={{
                                flex: '1',
                                padding: '15px 20px',
                                borderRadius: '30px',
                                border: 'none',
                                fontSize: '1rem'
                            }}
                        />
                        <button style={{
                            backgroundColor: 'white',
                            color: '#004830',
                            padding: '15px 30px',
                            borderRadius: '30px',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}>Subscribe Now</button>
                    </div>
                </div>
            </div>
            
            {/* Footer Spacer */}
            <div className="footer-spacer" style={{
                height: '200px',
                backgroundImage: 'url(/prayer.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 72, 48, 0.6)'
                }}></div>
            </div>
            
            <style jsx>{`
                .blog-page {
                    background-color: #f9f9f9;
                }
                
                .blog-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                }
                
                @media (max-width: 768px) {
                    .blog-hero h1 {
                        font-size: 2.5rem;
                    }
                    
                    .blog-hero p {
                        font-size: 1.2rem;
                    }
                    
                    .newsletter-section {
                        padding: 30px;
                    }
                    
                    .newsletter-section div {
                        flex-direction: column;
                    }
                    
                    .featured-post > div {
                        flex-direction: column;
                    }
                }
            `}</style>
            
            <Footer />
        </div>
    );
}
