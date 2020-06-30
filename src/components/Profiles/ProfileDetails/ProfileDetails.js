import React from 'react';
import ProfileCard from '../../../common/ProfileCard';
import './profileDetails.scss';

const ProfileDetails = () => {
  return (
    <div className='profile-page'>
      <section className='profile-page--top'>
        <ProfileCard />
        <div className='info-box--out'>
          <div className='info-box'>
            <div className='info-box__header'>
              <div className='card__styled-element'></div>
              პერსონალური ინფორმაცია
            </div>
            <div className='info-box__body'>
              <div className='info-box__row'>
                <div className='info-box__row-label'>საცხოვრებელი ქალაქი:</div>
                <div className='info-box__row-text'>Tbilisi</div>
              </div>
              <div className='info-box__row'>
                <div className='info-box__row-label'>ასაკი:</div>
                <div className='info-box__row-text'>26 წლის</div>
              </div>
              <div className='info-box__row'>
                <div className='info-box__row-label'>სქესი:</div>
                <div className='info-box__row-text'>ქალი</div>
              </div>
              <div className='info-box__row'>
                <div className='info-box__row-label'>განათლება:</div>
                <div className='info-box__row-text'>უმაღლესი</div>
                <div className="file--out">
                  <a href='#' download className='file file__min'>
                    diplomi
                  </a>
                </div>
              </div>
              <div className='info-box__row'>
                <div className='info-box__row-label'>მწეველი:</div>
                <div className='info-box__row-text'>არა</div>
              </div>
              <div className='info-box__row'>
                <div className='info-box__row-label'>სტუდენტი:</div>
                <div className='info-box__row-text'>არა</div>
              </div>
              <div className='info-box__row'>
                <div className='info-box__row-label'>ენები:</div>
                <div className='info-box__row-text'>
                  ქართული, რუსული, ინგლისური
                </div>
              </div>
              <div className='info-box__row'>
                <div className='info-box__row-label'>სამედიცინო განათლება:</div>
                <div className='info-box__row-text'>კი</div>
                <div className='file--out'>
                  <a href='#' download className='file file__min'>
                    მედ სერტიფიკატი
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='info-box'>
            <div className='info-box__header'>
              <div className='card__styled-element'></div>ბიოგრაფია
            </div>
            <div className='info-box__body'>
              <p>
                Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო
                ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა
                მბეჭდავმა ამწყობ დაზგაზე წიგნის საცდელი ეგზემპლარი დაბეჭდა. მისი
                ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან დღემდე,
                ელექტრონული ტიპოგრაფიის დრომდეც უცვლელად მოაღწია. განსაკუთრებული
                პოპულარობა მას 1960-იან წლებში გამოსულმა Letraset-ის ცნობილმა
                ტრაფარეტებმა მოუტანა, უფრო მოგვიანებით კი — Aldus PageMaker-ის
                ტიპის საგამომცემლო პროგრამებმა, რომლებშიც Lorem Ipsum-ის
                სხვადასხვა ვერსიები იყო ჩაშენებული. გავრცელებული მოსაზრებით.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='info-box--out'>
        <div className='info-box info-box--wide'>
          <div className='info-box__header'>
            <div className='card__styled-element'></div>ინფორმაცია ძიძაზე
          </div>
          <div className='info-box__body info-box__body--flex'>
            <div className='info-box__row'>
              <div className='info-box__row-label'>სამუშაო გამოცდილება:</div>
              <div className='info-box__row-text'>3 წელი</div>
            </div>

            <div className='info-box__row'>
              <div className='info-box__row-label'>სამუშაო გრაფიკი:</div>
              <div className='info-box__row-text'>სტანდარტული, 24 საათი</div>
            </div>
            <div className='info-box__row'>
              <div className='info-box__row-label'>
                სასურველი ანაზღაურება (თვეში):
              </div>
              <div className='info-box__row-text'>600 ლარი</div>
            </div>
            <div className='info-box__row'>
              <div className='info-box__row-label'>
                შემიძლია ვიმუშაო საათობრივად:
              </div>
              <div className='info-box__row-text'>კი</div>
            </div>
            <div className='info-box__row'>
              <div className='info-box__row-label'>
                ანაზღაურება საათობრივად მუშაობისას:
              </div>
              <div className='info-box__row-text'>25 ლარი (საათში)</div>
            </div>
            <div className='info-box__row'>
              <div className='info-box__row-label'>
                მოსავლელი ბავშვის ასაკი:
              </div>
              <div className='info-box__row-text'>ნებისმიერი</div>
            </div>
            <div className='info-box__row'>
              <div className='info-box__row-label'>
                ბავშვების მაქსიმალური რაოდენობის ერთდროული მოვლა:
              </div>
              <div className='info-box__row-text'>3</div>
            </div>
            <div className='info-box__row'>
              <div className='info-box__row-label'>
                შემიძლია საჭმლის მომზადება:
              </div>
              <div className='info-box__row-text'>კი</div>
            </div>
            <div className='info-box__row'>
              <div className='info-box__row-label'>
                შემიძლია ოჯახთან ერთად ვიმგზავრო:
              </div>
              <div className='info-box__row-text'>კი</div>
            </div>
            <div className='info-box__row'>
              <div className='info-box__row-label'>მყავს მანქანა:</div>
              <div className='info-box__row-text'>კი</div>
            </div>
          </div>
        </div>
      </section>
      <section className='info-box--out'>
        <div className='info-box info-box--wide'>
          <div className='info-box__header'>
            <div className='card__styled-element'></div>სარეკომენდაციო წერილები
            ან/და სხვა მიმაგრებული ფაილები
          </div>
          <div className='info-box__body'>
            <div className='file--out'>
              <a href='#' className='file' download>
                სარეკომენდაციო წერილი
              </a>
            </div>
            <div className='file--out'>
              <a href='#' className='file' download>
                სარეკომენდაციო წერილი 2
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileDetails;
