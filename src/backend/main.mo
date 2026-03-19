import List "mo:core/List";

actor {
  let services = List.empty<Text>();
  let address = "Sonnenallee 45. 12045 Berlin";
  let phone = "(030) 435 53 89";
  let clinicName = "Hausarztpraxis Dr. Giedion";
  let businessHours = "Mo-Fr 09:00-18:00";

  public query ({ caller }) func getServices() : async [Text] {
    services.toArray();
  };

  public query ({ caller }) func getAddress() : async Text {
    address;
  };

  public query ({ caller }) func getPhone() : async Text {
    phone;
  };

  public query ({ caller }) func getClinicName() : async Text {
    clinicName;
  };

  public query ({ caller }) func getBusinessHours() : async Text {
    businessHours;
  };
};
