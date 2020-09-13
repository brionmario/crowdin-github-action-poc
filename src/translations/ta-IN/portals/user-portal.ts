/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { UserPortalNS } from "../../../models";
export const userPortal: UserPortalNS = {
  components: {
    accountRecovery: {
      codeRecovery: {
        descriptions: {
          add: "குறியீட்டு மீட்பு விருப்புகளை சேர்க்க மற்றும் புதுப்பிக்க"
        },
        heading: "குறியீட்டு மீட்பு"
      },
      emailRecovery: {
        descriptions: {
          add: "மீட்பு மின்னஞ்சல் முகவரிய சேர்க்க",
          update: "மீட்பு மின்னஞ்சல் முகவரியை புதுப்பிக்க ({{email}})"
        },
        forms: {
          emailResetForm: {
            inputs: {
              email: {
                label: "மின்னஞ்சல் முகவரி",
                placeholder: "மீட்பு மின்னஞ்சல் முகவரியினை உள்ளிடுக",
                validations: {
                  empty: "மின்னஞ்சல் முகவரியினை உள்ளிடுக",
                  invalidFormat: "மின்னஞ்சல் முகவரி சரியான வடிவத்தில் இல்லை"
                }
              }
            }
          }
        },
        heading: "மின்னஞ்சல் மீட்பு",
        notifications: {
          updateEmail: {
            error: {
              description: "{{description}}",
              message: "மீட்பு மின்னஞ்சல் முகவரியினை புதுப்பிக்கும் பொழுது தவறேற்பட்டுவிட்டது"
            },
            genericError: {
              description: "மீட்பு மின்னஞ்சல் முகவரியினை புதுப்பிக்கும் பொழுது தவறேற்பட்டுவிட்டது",
              message: "ஏதோ தவறேற்பட்டுவிட்டது"
            },
            success: {
              description: "பயனர் விபரக்கோவையில் உள்ள மின்னஞ்சல் முகவரி புதுப்பிக்கப்பட்டுவிட்டது.",
              message: "மின்னஞ்சல் புதுப்பிக்கப்பட்டுவிட்டது"
            }
          }
        }
      },
      questionRecovery: {
        descriptions: {
          add: "கணக்கு மீட்பு சவால் வினாக்களை சேர்க்க மற்றும் புதுப்பிக்க"
        },
        forms: {
          securityQuestionsForm: {
            inputs: {
              answer: {
                label: "பதில்",
                placeholder: "பதிலினை உள்ளிடுக",
                validations: {
                  empty: "பதில் கட்டாய களமாகும்"
                }
              },
              question: {
                label: "வினா",
                placeholder: "வினாவொன்றிணை தேர்வு செய்க",
                validations: {
                  empty: "வினாவினை தேர்ந்தெடுத்தல் கட்டாயம்"
                }
              }
            }
          }
        },
        heading: "பாதுகாப்பு வினாக்கள்",
        notifications: {
          addQuestions: {
            error: {
              description: "{{description}}",
              message: "பாதுகாப்பு வினாக்களை கட்டமைக்கும் பொழுது தவறேற்பட்டுவிட்டது"
            },
            genericError: {
              description: "சவால் வினாக்களை சேர்க்கும் பொழுது தவறேற்பட்டுவிட்டது",
              message: "ஏதோ தவறேற்பட்டுவிட்டது"
            },
            success: {
              description: "பாதுகாப்பு வினாக்கள் வெற்றிகரமாக சேர்க்கப்பட்டுவிட்டன",
              message: "பாதுகாப்பு வினாக்கள் சேர்க்கப்பட்டுவிட்டன"
            }
          },
          updateQuestions: {
            error: {
              description: "{{description}}",
              message: "பாதுகாப்பு வினாக்களை புதுப்பிககும் பொழுது தவறேற்பட்டுவிட்டது"
            },
            genericError: {
              description: "பாதுகாப்பு வினாக்களை புதுப்பிககும் பொழுது தவறேற்பட்டுவிட்டது",
              message: "ஏதோ தவறேற்பட்டுவிட்டது !!!"
            },
            success: {
              description: "பாதுகாப்பு வினாக்கள் வெற்றிகரமாக புதுப்பிக்கப்பட்டுவிட்டன",
              message: "பாதுகாப்பு வினாக்கள் புதுப்பிக்கப்பட்டுவிட்டன"
            }
          }
        }
      }
    },
    advancedSearch: {
      form: {
        inputs: {
          filterAttribute: {
            label: "வடிகட்டும் பண்பு",
            placeholder: "எ.கா.: பெயர், விவரம் போன்றவை",
            validations: {
              empty: "வடிகட்டல் பண்பு ஒரு கட்டாய களமாகும்"
            }
          },
          filterCondition: {
            label: "வடிகட்டும் நிபந்தனை",
            placeholder: "எ.கா.: தொடங்குவது",
            validations: {
              empty: "வடிகட்டும் நிபந்தனை ஒரு கட்டாய களமாகும்"
            }
          },
          filterValue: {
            label: "வடிகட்டும் மதிப்பு",
            placeholder: "எ.கா.: admin, wso2 போன்றவை",
            validations: {
              empty: "வடிகட்டும் மதிப்பு ஒரு கட்டாய களமாகும்"
            }
          }
        }
      },
      hints: {
        querySearch: {
          actionKeys: "Shift + Enter",
          label: "கேள்வியின் மூலம் தேடுவதற்கு"
        }
      },
      options: {
        header: "மேம்பட்ட தேடல்"
      },
      placeholder: "பெயரைக் கொண்டு தேடு",
      popups: {
        clear: "தேடலை அழி",
        dropdown: "தேர்வுகளை காண்பி"
      },
      resultsIndicator: "{{query}} இற்கான பெறுபேறுகள்"
    },
    applications: {
      advancedSearch: {
        form: {
          inputs: {
            filterAttribute: {
              placeholder: "எ.கா.: பெயர், விவரம் போன்றவை"
            },
            filterCondition: {
              placeholder: "எ.கா.: தொடங்குவது"
            },
            filterValue: {
              placeholder: "எ.கா.: Zoom, Salesforce போன்றவை"
            }
          }
        },
        placeholder: "Search by application name"
      },
      all: {
        heading: "அனைத்து செயலிகளும்"
      },
      favourite: {
        heading: "பிடித்தவை"
      },
      notifications: {
        fetchApplications: {
          error: {
            description: "{{description}}",
            message: "செயலிகளை பெறுவதில் தவறேற்பட்டுவிட்டது"
          },
          genericError: {
            description: "செயலிகளை பெறமுடியவில்லை",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          success: {
            description: "செயலிகள் வெற்றிகராமாக பெறப்பட்டுவிட்டன.",
            message: "செயலிகள் பெறப்பட்டுவிட்டன"
          }
        }
      },
      placeholders: {
        emptyList: {
          action: "பட்டியலைப் புதுப்பிக்கவும்",
          subtitles: {
            0: "The applications list returned empty.",
            1: "This could be due to having no discoverable applications.",
            2: "Please ask an admin to enable discoverability for applications."
          },
          title: "செயலிகள் ஏதுமில்லை"
        }
      },
      recent: {
        heading: "அண்மையில் பயன்படுத்தப்பட்ட செயலிகள்"
      }
    },
    approvals: {
      notifications: {
        fetchApprovalDetails: {
          error: {
            description: "{{description}}",
            message: "ஒப்புதல்களை பெறுவதில் தவறேற்பட்டுவிட்டது"
          },
          genericError: {
            description: "ஒப்புதல்களை புதுப்பிக்க இயலவில்லை",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          success: {
            description: "ஒப்புதல் விவரங்கள் வெற்றிகரமாக பெறப்பட்டுவிட்டன",
            message: "ஒப்புதல் விவரங்கள் பெறப்பட்டுவிட்டன"
          }
        },
        fetchPendingApprovals: {
          error: {
            description: "{{description}}",
            message: "முடிவெடுக்கப்படாத ஒப்புதல்களை பெறுவதில் தவறு"
          },
          genericError: {
            description: "முடிவெடுக்கப்படாத ஒப்புதல்களை பெறுவதில் தவறேற்பட்டுவிட்டது",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          success: {
            description: "முடிவெடுக்கப்படாத ஒப்புதல்களை வெற்றிகரமாக பெறப்பட்டுவிட்டன",
            message: "முடிவெடுக்கப்படாத ஒப்புதல்களை பெறப்பட்டுவிட்டன"
          }
        },
        updatePendingApprovals: {
          error: {
            description: "{{description}}",
            message: "ஒப்புதல் புதுப்பிக்கப்பட்டுவிட்டது"
          },
          genericError: {
            description: "ஒப்புதலை புதுப்பிக்க இயலவில்லை",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          success: {
            description: "ஒப்புதல் வெற்றிகரமாக புதுப்பிக்கப்பட்டுவிட்டது",
            message: "புதுப்பித்தல் வெற்றி"
          }
        }
      }
    },
    changePassword: {
      forms: {
        passwordResetForm: {
          inputs: {
            confirmPassword: {
              label: "கடவுச்சொல் உறுதிப்பாடு",
              placeholder: "புதிய கடவுச்சொல்லை மீண்டும் உள்ளிடுங்கள்",
              validations: {
                empty: "கடவுச்சொல் உறுதிப்பாடு கட்டாயாமன களமாகும்.",
                mismatch: "உங்கள் புதிய கடவுச்சொல்லும் கடவுச்சொல் உறுதிப்பாடும் பொருந்தவில்லை."
              }
            },
            currentPassword: {
              label: "நிகழ்கால கடவுச்சொல்",
              placeholder: "உங்களின் நிகழ்கால கடவுச்சொல்லை உள்ளிடுங்கள்",
              validations: {
                empty: "நிகழ்கால கடவுச்சொல் கட்டாயமான களமாகும்.",
                invalid: "நீங்கள் அளித்த நிகழ்கால கடவுச்சொல் தவறானது"
              }
            },
            newPassword: {
              label: "புதிய கடவுச்சொல்",
              placeholder: "புதிய கடவுச்சொல்லை உள்ளிடுங்கள்",
              validations: {
                empty: "புதிய கடவுச்சொல் கட்டாயமான களமாகும்"
              }
            }
          },
          validations: {
            genericError: {
              description: "ஏதோ தவறேற்பட்டுவிட்டது. மீண்டும் முயற்சி செய்க.",
              message: "கடவுச்சொல் பிழையை மாற்றவும்"
            },
            invalidCurrentPassword: {
              description: "நீங்கள் அளித்த தற்போதைய கடவுச்சொல் தவறானது. மீண்டும் முயற்சி செய்க.",
              message: "கடவுச்சொல் பிழையை மாற்றவும்"
            },
            submitError: {
              description: "{{description}}",
              message: "கடவுச்சொல் பிழையை மாற்றவும்"
            },
            submitSuccess: {
              description: "உங்கள் கடவுச்சொல் வெற்றிகரமாக மாற்றப்பட்டது விட்டது",
              message: "கடவுச்சொல்லை மீட்டலில் வெற்றி"
            }
          }
        }
      },
      modals: {
        confirmationModal: {
          heading: "உறுதிப்படுத்தல்",
          message: "Changing the password will result in the termination of the current session. You will " + "have to login with the newly changed password. Do you wish to continue?"
        }
      }
    },
    consentManagement: {
      editConsent: {
        collectionMethod: "அறவிடும் முறை",
        dangerZones: {
          revoke: {
            actionTitle: "அகற்றுவதில்",
            header: "சம்மதத்தை ரத்துசெய்",
            subheader: "இந்த பயன்பாட்டிற்கான ஒப்புதலை நீங்கள் மீண்டும் வழங்க வேண்டும்."
          }
        },
        description: "விபரம்",
        piiCategoryHeading: "Manage consent for the collection and sharing of your personal information " + "with the application. Uncheck the attributes that you need to revoke and press the update " + "button to save the changes or press the revoke button to remove the consent for all the " + "attributes.",
        state: "நிலை",
        version: "பதிப்பு"
      },
      modals: {
        consentRevokeModal: {
          heading: "நீ சொல்வது உறுதியா?",
          message: "This operation is not reversible. This will permanently revoke consent for all the " + "attributes. Are you sure you want to proceed?",
          warning: "உள்நுழைவு ஒப்புதல் பக்கத்திற்கு நீங்கள் திருப்பி விடப்படுவீர்கள் என்பதை நினைவில் கொள்க"
        }
      },
      notifications: {
        consentReceiptFetch: {
          error: {
            description: "{{description}}",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          genericError: {
            description: "தேர்வு செய்யப்பட்ட செயலி பற்றிய தகவலை பெற முடியவில்லை",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          success: {
            description: "அனுமதி பற்றுசீட்டு வெற்றிகரமாக பெறப்பட்டுவிட்டது",
            message: "அனுமதி பற்றுசீட்டு பெறப்பட்டுவிட்டது"
          }
        },
        consentedAppsFetch: {
          error: {
            description: "{{description}}",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          genericError: {
            description: "அனுமதியளிக்கப்பட்ட செயலிகளின் பட்டியலை பெற முடியவில்லை",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          success: {
            description: "அனுமதியளிக்கபட்ட செயலிகளின் பட்டியல் வெற்றிகரமாக பெறப்பட்டுவிட்டது",
            message: "அனுமதியளிக்கபட்ட செயலிகளின் பட்டியல் பெறப்பட்டுவிட்டது"
          }
        },
        revokeConsentedApp: {
          error: {
            description: "{{description}}",
            message: "அனுமதி நீக்கலில் தவறு"
          },
          genericError: {
            description: "செயலியின் அனுமதியினை நீக்க இயலவில்லை",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          success: {
            description: "செயலியின் அனுமதி வெற்றிகராமக நீக்கப்பட்டுவிட்டது.",
            message: "அனுமதி நீக்கலில் வெற்றி"
          }
        },
        updateConsentedClaims: {
          error: {
            description: "{{description}}",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          genericError: {
            description: "செயலியின் அனுமதியளிக்கப்பட்ட கூற்றுக்கள் புதுப்பிக்கப்படுவதில் தோல்வி",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          success: {
            description: "செயலியின் அனுமதியளிக்கப்பட்ட கூற்றுக்கள் வெற்றிகரமாக புதுப்பிக்கப்பட்டுவிட்டன",
            message: "அனுமதியளிக்கப்பட்ட கூற்றுக்கள் புதுப்பிக்கப்பட்டுவிட்டன"
          }
        }
      }
    },
    federatedAssociations: {
      deleteConfirmation: "This will remove this external login from your account. Do you want to continue " + "removing?",
      notifications: {
        getFederatedAssociations: {
          error: {
            description: "{{description}}",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          genericError: {
            description: "வெளிப்புற உள்நுழைவுகளை பெற முடியவில்லை",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          success: {
            description: "வெளிப்புற உள்நுழைவுகள் வெற்றிகரமாக பெறப்பட்டுவிட்டன",
            message: "வெளிப்புற உள்நுழைவுகள் வெற்றிகரமாக பெறப்பட்டுவிட்டன"
          }
        },
        removeAllFederatedAssociations: {
          error: {
            description: "{{description}}",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          genericError: {
            description: "வெளிப்புற உள்நுழைவுகளை அகற்ற முடியவில்லை",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          success: {
            description: "அனைத்து வெளிப்புற உள்நுழைவுகளும் வெற்றிகரமாக அகற்றப்பட்டன",
            message: "வெளிப்புற உள்நுழைவுகள் வெற்றிகரமாக அகற்றப்பட்டன"
          }
        },
        removeFederatedAssociation: {
          error: {
            description: "{{description}}",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          genericError: {
            description: "வெளிப்புற உள்நுழைவை அகற்ற முடியவில்லை",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          success: {
            description: "வெளிப்புற உள்நுழைவு வெற்றிகரமாக அகற்றப்பட்டது",
            message: "வெளிப்புற உள்நுழைவு வெற்றிகரமாக அகற்றப்பட்டது"
          }
        }
      }
    },
    footer: {
      copyright: "WSO2 Identity Server © {{year}}"
    },
    linkedAccounts: {
      accountTypes: {
        local: {
          label: "உட்பயனர் கணக்கினை சேர்க்க"
        }
      },
      deleteConfirmation: "This will remove the linked account from your account. Do you want to continue " + "removing?",
      forms: {
        addAccountForm: {
          inputs: {
            password: {
              label: "கடவுச்சொல்",
              placeholder: "கடவுச்சொல்லை உள்ளிடுக",
              validations: {
                empty: "கடவுச்சொல் ஒரு கட்டாய களமாகும்"
              }
            },
            username: {
              label: "பயனர்பெயர்",
              placeholder: "பயனர்பெயரை உள்ளிடுக",
              validations: {
                empty: "பயனர்பெயர் ஒரு கட்டாய களமாகும்"
              }
            }
          }
        }
      },
      notifications: {
        addAssociation: {
          error: {
            description: "{{description}}",
            message: "இணைக்கப்பட்ட கணக்குகளை பெரும் பொழுது தவறேற்பட்டுவிட்டது"
          },
          genericError: {
            description: "கணக்கினை இணைக்கும் பொழுது தவறேற்பட்டுவிட்டது.",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          success: {
            description: "கணக்கு வெற்றிகரமாக இணைக்கப் பட்டுவிட்டது",
            message: "கணக்கு இணைக்கப்பட்டு விட்டது"
          }
        },
        getAssociations: {
          error: {
            description: "{{description}}",
            message: "இணைக்கப்பட்ட பயனர் கணக்குகளை பெறும் பொழுது தவறேற்பட்டுவிட்டது"
          },
          genericError: {
            description: "இணைக்கப்பட்ட கனக்குகளை பெறும் பொழுது தவறேற்பட்டுவிட்டது",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          success: {
            description: "இணைக்கபட்ட பயனர் கணக்குகள் வெற்றிகரமாக பெறப்பட்டுவிட்டன",
            message: "இணைக்கப்பட்ட பயனர் கணக்குகள் பெறப்பட்டுவிட்டன"
          }
        },
        removeAllAssociations: {
          error: {
            description: "{{description}}",
            message: "இணைக்கப்பட்ட பயனர் கணக்குகளை அகற்றுவதில் பிழை"
          },
          genericError: {
            description: "இணைக்கப்பட்ட பயனர் கணக்குகளை அகற்றும்போது பிழை ஏற்பட்டது",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          success: {
            description: "இணைக்கப்பட்ட அனைத்து பயனர் கணக்குகளும் அகற்றப்பட்டுள்ளன",
            message: "இணைக்கப்பட்ட கணக்குகள் வெற்றிகரமாக அகற்றப்பட்டன"
          }
        },
        removeAssociation: {
          error: {
            description: "{{description}}",
            message: "இணைக்கப்பட்ட பயனர் கணக்கை அகற்றுவதில் பிழை"
          },
          genericError: {
            description: "இணைக்கப்பட்ட பயனர் கணக்கை அகற்றும்போது பிழை ஏற்பட்டது",
            message: "ஏதோ தவறு நடைபெற்றிருக்கிறது"
          },
          success: {
            description: "இணைக்கப்பட்ட பயனர் கணக்குகள் அகற்றப்பட்டன",
            message: "இணைக்கப்பட்ட கணக்கு வெற்றிகரமாக அகற்றப்பட்டது"
          }
        },
        switchAccount: {
          error: {
            description: "{{description}}",
            message: "கணக்கினை மாற்றும் பொழுது தவறேற்பட்டுவிட்டது"
          },
          genericError: {
            description: "கணக்கினை மாற்றும் பொழுது தவறேற்பட்டுவிட்டது",
            message: "ஏதோ தவறேற்பட்டுவிட்டது"
          },
          success: {
            description: "கணக்கு வெற்றிகரமாக மாற்றப்பட்டுவிட்டது",
            message: "கணக்கு மாற்றப்பட்டுவிட்டது"
          }
        }
      }
    },
    mfa: {
      authenticatorApp: {
        description: "Scan the QR code using an Authenticator App to use TOTP" + " as a second " + "authentication factor",
        heading: "உறுதிப்பாட்டு செயலி",
        hint: "QR குறியீட்டினை காண்பி",
        modals: {
          done: "வெற்றி! இப்போது இரண்டு காரணி உறுதிப்பாட்டிற்கு உங்கள் உறுதிப்பாட்டு செயலியை பயன்படுத்தலாம்",
          scan: {
            authenticatorApps: "உறுதிப்பாட்டு செயலிகள்",
            generate: "புதிய குறியீட்டை உருவாக்கவும்",
            heading: "ஒரு உறுதிப்பாட்டு செயலியை பயன்படுத்தி இந்த QR குறியீட்டை பதிவு செய்யுங்கள்",
            messageBody: "உறுதிப்பாட்டு செயலிகளின் பட்டியலை இங்கே காணலாம்.",
            messageHeading: "உங்களிடம் உறுதிப்பாட்டு செயலி இல்லையா?"
          },
          verify: {
            error: "சரிபார்ப்பு தோல்வியுற்றது. தயவு செய்து மீண்டும் முயற்சிக்கவும்.",
            heading: "உறுதிப்பாட்டு செயலியிலிருந்து சரிபார்ப்புக் குறியீட்டை உள்ளிடவும்",
            label: "சரிபார்ப்புக் குறியீடு",
            placeholder: "உங்கள் சரிபார்ப்புக் குறியீட்டை உள்ளிடவும்",
            reScan: "மீண்டும் பதிவு செய்",
            reScanQuestion: "QR குறியீட்டினை மீண்டும் பதிவு செய்ய வேண்டுமா?",
            requiredError: "சரிபார்ப்புக் குறியீட்டை உள்ளிடவும்"
          }
        },
        notifications: {
          initError: {
            error: {
              description: "{{error}}",
              message: "ஏதோ தவறேற்பட்டுவிட்டது"
            },
            genericError: {
              description: "QR குறியீட்டினை பெறும் பொழுது தவறேற்பட்டுவிட்டது",
              message: "ஏதோ தவறேற்பட்டுவிட்டது"
            }
          },
          refreshError: {
            error: {
              description: "{{error}}",
              message: "ஏதோ தவறேற்பட்டுவிட்டது"
            },
            genericError: {
              description: "புதிய QR குறியீட்டினை பெறும் பொழுது தவறேற்பட்டுவிட்டது",
              message: "ஏதோ தவறேற்பட்டுவிட்டது"
            }
          }
        }
      },
      fido: {
        description: "FIDO கருவியினை இணைப்பதானூடாக உங்களை உறுதிப்படுத்திக் கொள்ளுங்கள்",
        form: {
          label: "பாதுகாப்பு கருவி",
          placeholder: "கருவியின் பெயரை உள்ளிடுக",
          remove: "கருவியினை நீக்கு",
          required: "உங்களின் பாதுகாப்பு கருவியின் பெயரை உள்ளிடுக"
        },
        heading: "FIDO",
        modals: {
          deviceRegistrationErrorModal: {
            description: "The device registration was interrupted. If this was not intentional you " + "may retry the same flow or try again with an older security key.",
            heading: "சாதன பதிவு தோல்வியுற்றது"
          }
        },
        notifications: {
          removeDevice: {
            error: {
              description: "{{description}}",
              message: "சாதனத்தை அகற்றும்போது பிழை ஏற்பட்டது"
            },
            genericError: {
              description: "சாதனத்தை அகற்றும்போது பிழை ஏற்பட்டது",
              message: "ஏதோ ஒரு தவறு ஏற்பட்டுவிட்டது"
            },
            success: {
              description: "சாதனம் பட்டியலிலிருந்து வெற்றிகரமாக அகற்றப்பட்டது",
              message: "உங்கள் சாதனம் வெற்றிகரமாக அகற்றப்பட்டது"
            }
          },
          startFidoFlow: {
            error: {
              description: "{{description}}",
              message: "ஏதோ ஒரு தவறு ஏற்பட்டுவிட்டது !!!"
            },
            genericError: {
              description: "உங்களின் கருவியினை பதிவு செய்யும் பொழுது தவறேற்பட்டுவிட்டது.",
              message: "ஏதோ ஒரு தவறு ஏற்பட்டுவிட்டது !!!"
            },
            success: {
              description: "The device was successfully registered and now you can use it as an " + "authentication factor",
              message: "உங்கள் கருவி பதிவு செய்யப்பட்டுவிட்டது."
            }
          },
          updateDeviceName: {
            error: {
              description: "{{description}}",
              message: "Error occurred while updating the security device name"
            },
            genericError: {
              description: "Error occurred while updating the security device name",
              message: "ஏதோ ஒரு தவறு ஏற்பட்டுவிட்டது !!!"
            },
            success: {
              description: "உங்கள் பாதுகாப்பு கருவியின் பெயர் வெற்றிகரமாக புதுப்பிக்கப்பட்டது.",
              message: "பாதுகாப்பு கருவியின் பெயர் வெற்றிகரமாக புதுப்பிக்கப்பட்டது."
            }
          }
        },
        tryButton: "பழைய சாதனத்துடன் முயற்சிக்கவும்"
      },
      smsOtp: {
        descriptions: {
          hint: "நீங்கள் உறுதிப்படுத்தும் குறியீட்டினை குறுஞ் செய்தியினூடாக பெறுவீர்கள்"
        },
        heading: "ஒரு முறை கடவுச்சொல்(OTP) குறுஞ் செய்தி",
        notifications: {
          updateMobile: {
            error: {
              description: "{{description}}",
              message: "Error occurred while updating the mobile number"
            },
            genericError: {
              description: "Error occurred while updating the mobile number",
              message: "தவறொன்று ஏற்பட்டுவிட்டது"
            },
            success: {
              description: "The mobile number in the user profile is updated successfully",
              message: "கையடக்க தொலைபேசி இலக்கம் புதுப்பிக்கப்பட்டுவிட்டது"
            }
          }
        }
      }
    },
    overview: {
      widgets: {
        accountActivity: {
          actionTitles: {
            update: "கணக்கு செயல்பாட்டை நிர்வகிக்கவும்"
          },
          description: " நீங்கள் பின்வரும் கருவியினூடாக உள் நுழைந்திருக்கின்றீர்கள்",
          header: "கணக்கின் செயற்பாடுகள்"
        },
        accountSecurity: {
          actionTitles: {
            update: "கணக்கின் பாதுகாப்பு அமைப்பினை புதுப்பி"
          },
          description: "உங்களின் கணக்கினை பாதுகாப்பாக வைத்திருப்பதற்கான அமைப்புக்களும் பரிந்துரைகளும்",
          header: "கணக்கின் பாதுகாப்பு"
        },
        accountStatus: {
          complete: "உங்கள் சுயவிவரம் முடிந்தது",
          completedFields: "பூர்த்தி செய்யப்பட்ட புலங்கள்",
          completionPercentage: "உங்கள் சுயவிவர நிறைவு {{percentage}}%",
          inComplete: "உங்கள் சுயவிவரத்தை பூர்த்தி செய்யவும்",
          inCompleteFields: "முழுமையற்ற புலங்கள்",
          mandatoryFieldsCompletion: "{{total}} கட்டாய புலங்களில் {{completed}} முடிந்தது",
          optionalFieldsCompletion: "{{total}} விருப்ப புலங்களில் {{completed}} முடிந்தது"
        },
        consentManagement: {
          actionTitles: {
            manage: "அனுமதிகளை முகாமை செய்"
          },
          description: "செயலிகளுடன் பகிர விரும்பும் தகவல்களை கட்டுப்படுத்து",
          header: "அனுமதி முகாமை"
        }
      }
    },
    privacy: {
      about: {
        description: "WSO2 Identity Server (referred to as “WSO2 IS” within this policy) is an open source " + "Identity Management and Entitlement Server that is based on open standards and specifications.",
        heading: "WSO2 Identity Server ஐ பற்றி"
      },
      privacyPolicy: {
        collectionOfPersonalInfo: {
          description: {
            list1: {
              0: "WSO2 IS uses your IP address to detect any suspicious login attempts to your account.",
              1: "WSO2 IS uses attributes like your first name, last name, etc., to provide a rich and" + " personalized user experience.",
              2: "WSO2 IS uses your security questions and answers only to allow account recovery."
            },
            para1: "WSO2 IS collects your information only to serve your access requirements. For example:"
          },
          heading: "தனிப்பட்ட தகவல் சேகரிப்பு",
          trackingTechnologies: {
            description: {
              list1: {
                0: "Collecting information from the user profile page where you enter your personal" + " data.",
                1: "Tracking your IP address with HTTP request, HTTP headers, and TCP/IP.",
                2: "Tracking your geographic information with the IP address.",
                3: "Tracking your login history with browser cookies. Please see our" + " {{cookiePolicyLink}} for more information."
              },
              para1: "WSO2 IS உங்கள் தகவல்களை பின்வருமாறு சேகரிக்கின்றது:"
            },
            heading: "கண்காணிப்பு தொழில்நுட்பங்கள்"
          }
        },
        description: {
          para1: "This policy describes how WSO2 IS captures your personal information, the purposes of" + " collection, and information about the retention of your personal information.",
          para2: "Please note that this policy is for reference only, and is applicable for the software " + "as a product. WSO2 Inc. and its developers have no access to the information held within " + "WSO2 IS. Please see the <1>disclaimer</1> section for more information.",
          para3: "Entities, organizations or individuals controlling the use and administration of WSO2 IS " + "should create their own privacy policies setting out the manner in which data is controlled " + "or processed by the respective entity, organization or individual."
        },
        disclaimer: {
          description: {
            list1: {
              0: "WSO2, its employees, partners, and affiliates do not have access to and do not " + "require, store, process or control any of the data, including personal data " + "contained in WSO2 IS. All data, including personal data is controlled and " + "processed by the entity or individual running WSO2 IS. WSO2, its employees partners " + "and affiliates are not a data processor or a data controller within the meaning of " + "any data privacy regulations. WSO2 does not provide any warranties or undertake any " + "responsibility or liability in connection with the lawfulness or the manner and " + "purposes for which WSO2 IS is used by such entities or persons.",
              1: "This privacy policy is for the informational purposes of the entity or persons " + "running WSO2 IS and sets out the processes and functionality contained within " + "WSO2 IS regarding personal data protection. It is the responsibility of entities " + "and persons running WSO2 IS to create and administer its own rules and processes " + "governing users' personal data, and such rules and processes may change the use, " + "storage and disclosure policies contained herein. Therefore users should consult " + "the entity or persons running WSO2 IS for its own privacy policy for details " + "governing users' personal data."
            }
          },
          heading: "பொறுப்புத்துறப்பு"
        },
        disclosureOfPersonalInfo: {
          description: "WSO2 IS only discloses personal information to the relevant applications (also " + "known as Service Provider) that are registered with WSO2 IS. These applications are " + "registered by the identity administrator of your entity or organization. Personal " + "information is disclosed only for the purposes for which it was collected (or for a " + "use identified as consistent with that purpose), as controlled by such Service Providers, " + "unless you have consented otherwise or where it is required by law.",
          heading: "தனிப்பட்ட தகவல்களை வெளிப்படுத்தல்",
          legalProcess: {
            description: "Please note that the organization, entity or individual running WSO2 IS may " + "be compelled to disclose your personal information with or without your consent when " + "it is required by law following due and lawful process.",
            heading: "சட்ட செயல்முறை"
          }
        },
        heading: "தனியுரிமைக் கொள்கை",
        moreInfo: {
          changesToPolicy: {
            description: {
              para1: "Upgraded versions of WSO2 IS may contain changes to this policy and " + "revisions to this policy will be packaged within such upgrades. Such changes " + "would only apply to users who choose to use upgraded versions.",
              para2: "The organization running WSO2 IS may revise the Privacy Policy from time to " + "time. You can find the most recent governing policy with the respective link " + "provided by the organization running WSO2 IS. The organization will notify " + "any changes to the privacy policy over our official public channels."
            },
            heading: "கொள்கை மாற்றங்கள்"
          },
          contactUs: {
            description: {
              para1: "Please contact WSO2 if you have any question or concerns regarding this privacy " + "policy."
            },
            heading: "எங்களை தொடர்பு கொள்ள"
          },
          heading: "மேலதிக தகவல்கள்",
          yourChoices: {
            description: {
              para1: "If you are already have a user account within WSO2 IS, you have the right to " + "deactivate your account if you find that this privacy policy is unacceptable to you.",
              para2: "If you do not have an account and you do not agree with our privacy policy, " + "you can choose not to create one."
            },
            heading: "உங்கள் தேர்வுகள்"
          }
        },
        storageOfPersonalInfo: {
          heading: "தனிப்பட்ட தகவல் சேமிப்பு",
          howLong: {
            description: {
              list1: {
                0: "Current password",
                1: "Previously used passwords"
              },
              para1: "WSO2 IS retains your personal data as long as you are an active user of our " + "system. You can update your personal data at any time using the given self-care " + "user portals.",
              para2: "WSO2 IS may keep hashed secrets to provide you with an added level of security. " + "This includes:"
            },
            heading: "எவ்வளவு காலத்திற்கு உங்கள் தகவல்கள் வைத்திருக்கப்படும்?"
          },
          requestRemoval: {
            description: {
              para1: "You can request the administrator to delete your account. The administrator is " + "the administrator of the tenant you are registered under, or the " + "super-administrator if you do not use the tenant feature.",
              para2: "Additionally, you can request to anonymize all traces of your activities " + "that WSO2 IS may have retained in logs, databases or analytical storage."
            },
            heading: "உங்கள் தனிப்பட்ட தகவல்களை நீக்க கோருவது எப்படி?"
          },
          where: {
            description: {
              para1: "WSO2 IS stores your personal information in secured databases. WSO2 IS " + "exercises proper industry accepted security measures to protect the database " + "where your personal information is held. WSO2 IS as a product does not transfer " + "or share your data with any third parties or locations.",
              para2: "WSO2 IS may use encryption to keep your personal data with an added level " + "of security."
            },
            heading: "உங்கள் தனிப்பட்ட தகவல்கள் எங்கு சேகரிக்கப்படுகின்றன?"
          }
        },
        useOfPersonalInfo: {
          description: {
            list1: {
              0: "To provide you with a personalized user experience. WSO2 IS uses your name and " + "uploaded profile pictures for this purpose.",
              1: "To protect your account from unauthorized access or potential hacking attempts. " + "WSO2 IS uses HTTP or TCP/IP Headers for this purpose.",
              2: "Derive statistical data for analytical purposes on system performance improvements. " + "WSO2 IS will not keep any personal information after statistical calculations. " + "Therefore, the statistical report has no means of identifying an individual person."
            },
            para1: "WSO2 IS will only use your personal information for the purposes for which it was " + "collected (or for a use identified as consistent with that purpose).",
            para2: "WSO2 IS உங்கள் தனிப்பட்ட தகவல்களை பின்வரும் நோக்கங்களுக்காக மட்டுமே பயன்படுத்துகிறது.",
            subList1: {
              heading: "இதில் பின்வருவன அடங்கும்:",
              list: {
                0: "IP address",
                1: "Browser fingerprinting",
                2: "Cookies"
              }
            },
            subList2: {
              heading: "WSO2 IS பின்வருவனவற்றை பயன்படத்தலாம்:",
              list: {
                0: "IP Address to derive geographic information",
                1: "Browser fingerprinting to determine the browser technology or/and version"
              }
            }
          },
          heading: "தனிப்பட்ட தகவல்களின் பாவனை"
        },
        whatIsPersonalInfo: {
          description: {
            list1: {
              0: "Your user name (except in cases where the user name created by your employer is " + "under contract)",
              1: "Your date of birth/age",
              2: "IP address used to log in",
              3: "Your device ID if you use a device (e.g., phone or tablet) to log in"
            },
            list2: {
              0: "City/Country from which you originated the TCP/IP connection",
              1: "Time of the day that you logged in (year, month, week, hour or minute)",
              2: "Type of device that you used to log in (e.g., phone or tablet)",
              3: "Operating system and generic browser information"
            },
            para1: "WSO2 IS considers anything related to you, and by which you may be identified, as " + "your personal information. This includes, but is not limited to:",
            para2: "However, WSO2 IS also collects the following information that is not considered " + "personal information, but is used only for <1>statistical</1> purposes. The reason " + "for this is that this information can not be used to track you."
          },
          heading: "தனிப்பட்ட தகவல்கள் என்றால் என்ன?"
        }
      }
    },
    profile: {
      fields: {
        addressesHome: "வீட்டு முகவரி",
        addressesWork: "தொழில் முகவரி",
        emails: "மின்னஞ்சல் முகவரி",
        emailsHome: "வீட்டு மின்னஞ்சல் முகவரி",
        emailsOther: "வேறு மின்னஞ்சல் முகவரி",
        emailsWork: "தொழில் மின்னஞ்சல் முகவரி",
        generic: {
          default: "ஐச் சேருங்கள் {{fieldName}}"
        },
        nameFamilyName: "இறுதிப்பெயர்",
        nameGivenName: "முதற்பெயர்",
        phoneNumbers: "தொலைபேசி இலக்கம்",
        phoneNumbersHome: "வீட்டு தொலைபேசி இலக்கம்",
        phoneNumbersMobile: "கையடக்க தொலைபேசி இலக்கம்",
        phoneNumbersOther: "வேறு தொலைபேசி இலக்கம்",
        phoneNumbersWork: "தொழில் தொலைபேசி இலக்கம்",
        profileImage: "பயனர் படம்",
        profileUrl: "URL",
        userName: "பயனர் பெயர்"
      },
      forms: {
        emailChangeForm: {
          inputs: {
            email: {
              label: "மின்னஞ்சல் முகவரி",
              note: "கவனிக்குக: இது உங்கள் சுயவிவரத்தில் உள்ள மின்னஞ்சல் முகவரியை மாற்றும்",
              placeholder: "மின்னஞ்சல் முகவரியை உள்ளிடவும்",
              validations: {
                empty: "மின்னஞ்சல் முகவரி ஒரு கட்டாயா களமாகும்",
                invalidFormat: "மின்னஞ்சல் முகவரி சரியான வடிவத்தில் இல்லை"
              }
            }
          }
        },
        generic: {
          inputs: {
            placeholder: "{{fieldName}} ஐ உள்ளிடவும்",
            validations: {
              empty: "{{fieldName}} ஒரு கட்டாயா களமாகும்",
              invalidFormat: "{{fieldName}} சரியான வடிவத்தில் இல்லை"
            }
          }
        },
        mobileChangeForm: {
          inputs: {
            mobile: {
              label: "கையடக்க தொலைபேசி இலக்கம்",
              note: "கவனிக்குக: இது உங்களின் சுயவிபரத்தில் உள்ள கையடக்க தொலைபேசி இலக்கத்தை மாற்றும்",
              placeholder: "கையடக்க தொலைபேசி இலக்கத்தை உள்ளிடவும்",
              validations: {
                empty: "கையடக்க தொலைபேசி இலக்கம் ஒரு கட்டாயா களமாகும்",
                invalidFormat: "கையடக்க தொலைபேசி இலக்கம் சரியான வடிவத்தில் இல்லை"
              }
            }
          }
        },
        nameChangeForm: {
          inputs: {
            firstName: {
              label: "முதற்பெயர்",
              placeholder: "முதற்பெயரை உள்ளிடவும்",
              validations: {
                empty: "முதற்பெயர் ஒரு கட்டாயா களமாகும்"
              }
            },
            lastName: {
              label: "இறுதிப்பெயர்",
              placeholder: "இறுதிப்பெயரை உள்ளிடவும்",
              validations: {
                empty: "இறுதிப்பெயர் ஒரு கட்டாயா களமாகும்"
              }
            }
          }
        },
        organizationChangeForm: {
          inputs: {
            organization: {
              label: "நிறுவனம்",
              placeholder: "நிறுவனத்தை உள்ளிடவும்",
              validations: {
                empty: "நிறுவனம் ஒரு கட்டாயா களமாகும்"
              }
            }
          }
        }
      },
      messages: {
        emailConfirmation: {
          content: "உங்கள் சுயவிவரத்தில் புதிய மின்னஞ்சலைச் சேர்க்க மின்னஞ்சல் முகவரி புதுப்பிப்பை உறுதிப்படுத்தவும்.",
          header: "உறுதிப்படுத்தல் நிலுவையில் உள்ளது!"
        }
      },
      notifications: {
        getProfileInfo: {
          error: {
            description: "{{description}}",
            message: "ஏதோ தவறேற்பட்டுவிட்டது !!!"
          },
          genericError: {
            description: "பயனர் விபரத்தை பெறும் பொழுது தவறேற்பட்டுவிட்டது",
            message: "ஏதோ தவறேற்பட்டுவிட்டது !!!"
          },
          success: {
            description: "பயனர் விபரம் வெற்றிகரமாக பெறப்பட்டுவிட்டது",
            message: "பயனர் விபரம் பெறப்பட்டுவிட்டது"
          }
        },
        getUserReadOnlyStatus: {
          genericError: {
            description: "பயனரின் படிக்க-மட்டும் நிலையை மீட்டெடுக்கும்போது தவறேற்பட்டுவிட்டது",
            message: "ஏதோ தவறேற்பட்டுவிட்டது !!!"
          }
        },
        updateProfileInfo: {
          error: {
            description: "{{description}}",
            message: "ஏதோ தவறேற்பட்டுவிட்டது !!!"
          },
          genericError: {
            description: "பயனர் சுயவிபரத்தை புதுப்பிக்கும் பொழுது தவறேற்பட்டுவிட்டது",
            message: "ஏதோ தவறேற்பட்டுவிட்டது !!!"
          },
          success: {
            description: "பயனர் சுயவிபரம் வெற்றிகரமாக புதுப்பிக்கபட்டுவிட்டது.",
            message: "பயனர் சுயவிபரம் புதுப்பிக்கபட்டுவிட்டது"
          }
        }
      },
      placeholders: {
        SCIMDisabled: {
          heading: "இந்த அம்சம் உங்கள் கணக்கிற்கு கிடைக்கவில்லை"
        }
      }
    },
    profileExport: {
      notifications: {
        downloadProfileInfo: {
          error: {
            description: "{{description}}",
            message: "பயனர் சுயவிபரத்தை பதிவிறக்கம் செய்யும் பொழுது தவறேற்பட்டுவிட்டது"
          },
          genericError: {
            description: "பயனர் சுயவிபரத்தை பதிவிறக்கம் செய்யும் பொழுது தவறேற்பட்டுவிட்டது",
            message: "ஏதோ தவறேற்பட்டுவிட்டது !!!"
          },
          success: {
            description: "பயனர் சுயவிபரங்களைக் கொண்ட கோப்பு பதிவிறங்க தொடங்கிவிட்டது.",
            message: "பயனர் சுயவிபர பதிவிறக்கம் ஆரம்பிக்கப்பட்டுவிட்டது"
          }
        }
      }
    },
    userAvatar: {
      infoPopover: "இந்த படம் <1>Gravatar</1> சேவையிலிருந்து மீட்டெடுக்கப்பட்டது.",
      urlUpdateHeader: "உங்கள் சுயவிவரப் படத்தை அமைக்க பட URL ஐ உள்ளிடவும்"
    },
    userSessions: {
      browserAndOS: "{{os}} {{version}} இல் {{browser}}",
      dangerZones: {
        terminate: {
          actionTitle: "நிறுத்துதல்",
          header: "அமர்வை நிறுத்தவும்",
          subheader: "குறிப்பிட்ட சாதனத்தில் நீங்கள் அமர்விலிருந்து வெளியேறுவீர்கள்."
        }
      },
      lastAccessed: "இறுதியாக அணுகியது {{date}}",
      modals: {
        terminateAllUserSessionsModal: {
          heading: "உறுதிப்பாடு",
          message: "This action will log you out of all the sessions on every device. Do you wish to " + "continue?"
        },
        terminateUserSessionModal: {
          heading: "உறுதிப்பாடு",
          message: "This action will log you out of the session on the particular device. Do you wish to " + "continue?"
        }
      },
      notifications: {
        fetchSessions: {
          error: {
            description: "{{description}}",
            message: "IDP அமர்வுகளை பெறும் பொழுது தவறேற்பட்டுவிட்டது."
          },
          genericError: {
            description: "IDP அமர்வுகளை பெற இயலவில்லை",
            message: "ஏதோ தவறேற்பட்டுவிட்டது."
          },
          success: {
            description: "IDP அமர்வுகள் வெற்றிகரமாக பெறப்பட்டுவிட்டன.",
            message: "IDP அமர்வுகள் பெறப்பட்டுவிட்டன"
          }
        },
        terminateAllUserSessions: {
          error: {
            description: "{{description}}",
            message: "IDP அமர்வுகளை முடிக்க இயலவில்லை"
          },
          genericError: {
            description: "IDP அமர்வுகளை முடிக்கும் பொழுது தவறேற்பட்டுவிட்டது",
            message: "IDP அமர்வுகளை முடிக்க இயலவில்லை"
          },
          success: {
            description: "சகல IDP அமர்வுகளும் வெற்றிகரமாக முடிக்கப்பட்டுவிட்டன.",
            message: "சகல IDP அமர்வுகளும் முடிக்கப்பட்டுவிட்டன"
          }
        },
        terminateUserSession: {
          error: {
            description: "{{description}}",
            message: "IDP அமர்வினை முடிக்க இயலவில்லை"
          },
          genericError: {
            description: "IDP அமரவை முடிக்கும் பொழுது தவறேற்பட்டுவிட்டது",
            message: "IDP அமர்வினை முடிக்க இயலவில்லை"
          },
          success: {
            description: "IDP அமர்வு வெற்றிகரமாக முடிக்கப்பட்டுவிட்டது.",
            message: "அமர்வு முடிக்கப்பட்டுவிட்டது"
          }
        }
      }
    }
  },
  modals: {
    editAvatarModal: {
      content: {
        gravatar: {
          errors: {
            noAssociation: {
              content: "It seems like the selected email is not registered on Gravatar. " + "Sign up for a Gravatar account by visiting Gravatar official website or use " + "one of the following.",
              header: "பொருந்தக்கூடிய Gravatar படம் எதுவும் கிடைக்கவில்லை!"
            }
          },
          heading: "Gravatarஐ அடிப்படையாகக் கொண்டது "
        },
        hostedAvatar: {
          heading: "ஹோஸ்ட் செய்யப்பட்ட படம்",
          input: {
            errors: {
              http: {
                content: "The selected URL points to an insecure image served over HTTP. " + "Please proceed with caution.",
                header: "பாதுகாப்பற்ற உள்ளடக்கம்!"
              },
              invalid: {
                content: "செல்லுபடியாகும் பட URL ஐ உள்ளிடவும்"
              }
            },
            hint: "மூன்றாம் தரப்பு இடத்தில் ஹோஸ்ட் செய்யப்பட்ட செல்லுபடியாகும் பட URL ஐ உள்ளிடவும்.",
            placeholder: "படத்திற்கான URL ஐ உள்ளிடவும்.",
            warnings: {
              dataURL: {
                content: "Using Data URLs with large character count might result in database " + "issues. Proceed with caution.",
                header: "உள்ளிட்ட தரவு URL ஐ இருமுறை சரிபார்க்கவும்!"
              }
            }
          }
        },
        systemGenAvatars: {
          heading: "கணினி உருவாக்கிய அவதாரம்",
          types: {
            initials: "தொடக்கங்கள்"
          }
        }
      },
      description: null,
      heading: "சுயவிவரப் படத்தைப் புதுப்பிக்கவும்",
      primaryButton: "சேமி",
      secondaryButton: "ரத்துசெய்"
    },
    sessionTimeoutModal: {
      description: "You will be logged out of the current session due to inactivity." + "Please choose Stay logged in if you would like to continue the session.",
      heading: "நீங்கள் <1>{{ time }}</1> இல் வெளியேறுவீர்கள்.",
      primaryButton: "உள்நுழைந்திருங்கள்",
      secondaryButton: "வெளியேறு"
    }
  },
  pages: {
    applications: {
      subTitle: "உங்கள் செயலிகளை முகாமை செய்ய மற்றும் பராமரிக்க",
      title: "செயலிகள்"
    },
    operations: {
      subTitle: "முடிவு செய்யப்படாத அனுமதிகள் போன்ற பணிகளை முகாமை செய்யவும் பராமரிக்கவும்",
      title: "செயற்பாடுகள்"
    },
    overview: {
      subTitle: "உங்களின் தகவல், பாதுகாப்பு, தனியுரிமை மற்றும் ஏனைய சார்ந்த கட்டமைப்புக்களை முகாமை செய்க",
      title: "வருக, {{firstName}}"
    },
    personalInfo: {
      subTitle: "உங்களின் கணக்கு, உப சுயவிபரக்கோவை, மற்றும் உங்களை பற்றிய தகவல்களை முகாமை செய்க",
      title: "பயனர் விபரம்"
    },
    privacy: {
      subTitle: "",
      title: "WSO2 Identity Server தனியுரிமைக் கொள்கை"
    },
    security: {
      subTitle: "உங்களின் கணக்கின் பாதுகாப்பை உறுதிப்படுத்த அமைப்புக்களை புதுப்பிக",
      title: "பாதுகாப்பு"
    }
  },
  placeholders: {
    404: {
      action: "மீண்டும் முகப்பிற்கு செல்ல",
      subtitles: {
        0: "We couldn't find the page you are looking for.",
        1: "Please check the URL or click on the button below to be redirected back to the home page."
      },
      title: "பக்கம் காணப்படவில்லை"
    },
    emptySearchResult: {
      action: "தேடல் கேள்வியினை அழி",
      subtitles: {
        0: "We couldn't find any results for \"{{query}}\"",
        1: "Please try a different search term."
      },
      title: "பெறுபேறுகள் எதுவுமில்லை"
    },
    genericError: {
      action: "பக்கத்தைப் புதுப்பிக்கவும்",
      subtitles: {
        0: "Something went wrong while displaying this page.",
        1: "See the browser console for technical details."
      },
      title: "ஏதோ தவறு ஏற்பட்டது"
    },
    loginError: {
      action: "வெளியேறுதலைத் தொடரவும்",
      subtitles: {
        0: "It seems like you don't have permission to use this portal.",
        1: "Please sign in with a different account."
      },
      title: "உங்களுக்கு அங்கீகாரம் இல்லை"
    }
  },
  sections: {
    accountRecovery: {
      description: "If you forget your password or username, recover your account " + "using email, SMS, or challenge questions",
      heading: "கணக்கு மீட்பு"
    },
    approvals: {
      description: "Approve or deny tasks related to workflow operations like adding users, " + "updating user claims, deleting user roles, etc.",
      heading: "முடிவெடுக்கப்படாத ஒப்புதல்கள்",
      placeholders: {
        emptyApprovalList: {
          heading: "உங்களிடம் {{status}} நிலையில் உள்ள முடிவெடுக்கப்படாத ஒப்புதல்கள் இல்லை"
        }
      }
    },
    changePassword: {
      actionTitles: {
        change: "உங்கள் கடவுச்சொல்லை மாற்றுக"
      },
      description: "பதிவு செய்த கடவுச்சொல்லை மாற்று.",
      heading: "கடவுச்சொல்லை மாற்று"
    },
    consentManagement: {
      actionTitles: {
        empty: "நீங்கள் எந்தவொரு செயலிற்கும் அனுமதி அளிக்கவில்லை"
      },
      description: "Revoke any consent given to an application or personal detail that you " + "have agreed to share",
      heading: "அனுமதியளிக்கப்பட்ட செயலிகள்",
      placeholders: {
        emptyConsentList: {
          heading: "நீங்கள் எந்தவொரு செயலிற்கும் அனுமதி அளிக்கவில்லை."
        }
      }
    },
    federatedAssociations: {
      description: "View your accounts from other identity providers that are linked with this account",
      heading: "வெளிப்புற உள்நுழைவுகள்"
    },
    linkedAccounts: {
      actionTitles: {
        add: "கணைக்கினை சேர்க்க"
      },
      description: "உங்களுடைய அனைத்து இணைக்கப்பட்ட கணக்குகளையும் முகாமை செய்ய",
      heading: "இணைக்கப்பட்ட கணக்குகள்"
    },
    mfa: {
      description: "Add an extra layer of protection to your account by configuring multiple " + "steps of authentication. You can choose from options like SMS or a security device",
      heading: "பல காரணி உறுதிப்பாடு"
    },
    profile: {
      description: "உங்கள் அடிப்படை சுயவிபரத் தகவல்களை முகாமை செய்ய மற்றும் புதுப்பிக்க",
      heading: "சுயவிபரம்"
    },
    profileExport: {
      actionTitles: {
        export: "சுயவிபரத்தை ஏற்றுமதி செய்க"
      },
      description: "Download all your profile data including personal data, security questions, and consents",
      heading: "சுயவிபரத்தை ஏற்றுமதி செய்க"
    },
    userSessions: {
      actionTitles: {
        empty: "செயலில் IDP அமர்வுகள் இல்லை",
        terminateAll: "சகல IDP அமர்வுகளையும் முடிக்க"
      },
      description: "செயற்பாட்டில் உள்ள உங்கள் IDP அமர்வுகளை முகாமை செய்ய மற்றும் பார்க்க",
      heading: "செயற்பாட்டில் உள்ள IDP அமர்வுகள்",
      placeholders: {
        emptySessionList: {
          heading: "இந்த பயனரின் எந்தவொரு IDP அமர்வும் செய்ற்பாட்டினில் இல்லை"
        }
      }
    }
  }
};